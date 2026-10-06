import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { Feature } from '../models/feature.model';

const SWIPE_THRESHOLD_PX = 50;

@Component({
  selector: 'app-project-lightbox',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-lightbox.component.html',
})
export class ProjectLightboxComponent {
  readonly features = input.required<Feature[]>();
  /** Index of the open screenshot; null while the lightbox is closed. */
  readonly index = model<number | null>(null);

  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly loadedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly total = computed(() => this.features().length);
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly current = computed(() => {
    const index = this.index();
    return index === null || !Number.isInteger(index) ? undefined : this.features()[index];
  });
  /** Single-item list so each screenshot gets a fresh <img> and stale load events cannot leak. */
  protected readonly currentAsList = computed(() => {
    const current = this.current();
    return current ? [current] : [];
  });

  private returnFocusTo: HTMLElement | null = null;
  private touchStart: { id: number; x: number; y: number } | null = null;
  private suppressNextStageClick = false;
  private readonly preloadedImages = new Set<string>();

  constructor() {
    effect(() => {
      if (!this.isBrowser) {
        return;
      }
      const isOpenRequested = this.current() !== undefined;
      const dialog = this.dialog().nativeElement;
      if (isOpenRequested && !dialog.open) {
        this.open(dialog);
      } else if (!isOpenRequested && dialog.open) {
        dialog.close();
      }
    });

    effect(() => this.preloadNeighbours());

    inject(DestroyRef).onDestroy(() => this.releasePage());
  }

  protected previous(): void {
    this.step(-1);
  }

  protected next(): void {
    this.step(1);
  }

  protected close(): void {
    this.index.set(null);
  }

  protected onNativeClose(): void {
    // Fired for Escape and programmatic close; a queued event must not undo a reopen.
    if (this.dialog().nativeElement.open) {
      return;
    }
    this.releasePage();
    this.resetSwipe();
    this.index.set(null);
    if (this.returnFocusTo?.isConnected) {
      this.returnFocusTo.focus();
    }
    this.returnFocusTo = null;
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previous();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    }
  }

  protected onStageClick(event: MouseEvent): void {
    if (this.suppressNextStageClick) {
      this.suppressNextStageClick = false;
      return;
    }
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  protected onTouchStart(event: TouchEvent): void {
    const startsOnControl = (event.target as Element | null)?.closest('button') !== null;
    if (event.touches.length !== 1 || startsOnControl) {
      this.resetSwipe();
      return;
    }
    const touch = event.touches[0];
    this.touchStart = { id: touch.identifier, x: touch.clientX, y: touch.clientY };
  }

  protected onTouchEnd(event: TouchEvent): void {
    const start = this.touchStart;
    const touch = start && Array.from(event.changedTouches).find((t) => t.identifier === start.id);
    this.touchStart = null;
    if (!start || !touch) {
      return;
    }
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
      // Browsers may still synthesize a click after the gesture; it must not dismiss the dialog.
      this.suppressNextStageClick = true;
      this.step(deltaX < 0 ? 1 : -1);
    }
  }

  protected resetSwipe(): void {
    this.touchStart = null;
  }

  protected markLoaded(src: string): void {
    this.loadedImages.update((loaded) => new Set(loaded).add(src));
  }

  protected markFailed(src: string): void {
    this.failedImages.update((failed) => new Set(failed).add(src));
  }

  /** Largest box with the image's aspect ratio that fits the stage without upscaling. */
  protected frameWidth(feature: Feature): string {
    const { width, height } = feature.featurePhoto;
    return `min(100cqw, ${width}px, calc(100cqh * ${width} / ${height}))`;
  }

  private open(dialog: HTMLDialogElement): void {
    const active = this.document.activeElement;
    this.returnFocusTo = active instanceof HTMLElement ? active : null;
    this.document.body.classList.add('overflow-hidden');
    dialog.showModal();
  }

  private releasePage(): void {
    this.document.body.classList.remove('overflow-hidden');
  }

  private step(direction: 1 | -1): void {
    const index = this.index();
    const total = this.total();
    if (index === null || this.current() === undefined || total < 2) {
      return;
    }
    this.index.set((index + direction + total) % total);
  }

  private preloadNeighbours(): void {
    const index = this.index();
    const features = this.features();
    if (!this.isBrowser || index === null || this.current() === undefined || features.length < 2 || this.prefersSavingData()) {
      return;
    }
    for (const offset of [1, -1]) {
      const src = features[(index + offset + features.length) % features.length].featurePhoto.full;
      if (!this.preloadedImages.has(src)) {
        this.preloadedImages.add(src);
        new Image().src = src;
      }
    }
  }

  private prefersSavingData(): boolean {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    return connection?.saveData === true;
  }
}

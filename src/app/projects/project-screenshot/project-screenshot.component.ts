import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { ProjectImage } from '../models/feature.model';

type LoadStatus = 'loading' | 'loaded' | 'error';

@Component({
  selector: 'app-project-screenshot',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'absolute inset-0 block' },
  templateUrl: './project-screenshot.component.html',
})
export class ProjectScreenshotComponent {
  readonly image = input.required<ProjectImage>();
  readonly alt = input.required<string>();
  readonly priority = input(false);

  // Keyed by src so a new image input starts over in the loading state.
  private readonly settled = signal<{ src: string; status: LoadStatus } | null>(null);
  protected readonly status = computed<LoadStatus>(() => {
    const settled = this.settled();
    return settled?.src === this.image().thumb ? settled.status : 'loading';
  });

  private readonly imageElement = viewChild<ElementRef<HTMLImageElement>>('img');

  constructor() {
    // An image can finish loading before the (load) listener is attached on bootstrap.
    afterNextRender(() => {
      const img = this.imageElement()?.nativeElement;
      if (img?.complete) {
        this.settle(img.getAttribute('src'), img.naturalWidth > 0 ? 'loaded' : 'error');
      }
    });
  }

  protected settle(src: string | null, status: Exclude<LoadStatus, 'loading'>): void {
    if (src !== null) {
      this.settled.set({ src, status });
    }
  }
}

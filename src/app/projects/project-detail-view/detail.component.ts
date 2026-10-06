import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';

import { ProjectsService } from '../projects.service';
import { ProjectScreenshotComponent } from '../project-screenshot/project-screenshot.component';
import { ProjectLightboxComponent } from '../project-lightbox/project-lightbox.component';
import { OPENED_FROM_LANDING_STATE } from '../project-navigation';
import { NavigationService } from '../../shared/navigation.service';
import { PageSectionNames } from '../../shared/page.defs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, TranslatePipe, ProjectScreenshotComponent, ProjectLightboxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly projectsService = inject(ProjectsService);
  private readonly navigationService = inject(NavigationService);
  private readonly injector = inject(Injector);
  private readonly heading = viewChild<ElementRef<HTMLElement>>('heading');

  private readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { requireSync: true },
  );

  readonly project = computed(() => this.projectsService.getSingleProject(this.projectId()));
  readonly summary = computed(() => this.projectsService.getProjectSummary(this.projectId()));

  readonly adjacentProjects = computed(() => {
    const projects = this.projectsService.getProjectsList();
    const index = projects.findIndex((project) => project.projectPage === this.projectId());
    if (index === -1) {
      return { previous: undefined, next: undefined };
    }
    return {
      previous: projects[(index - 1 + projects.length) % projects.length],
      next: projects[(index + 1) % projects.length],
    };
  });

  readonly lightboxIndex = signal<number | null>(null);

  constructor() {
    let previousProjectId: string | undefined;
    effect(() => {
      const projectId = this.projectId();
      if (previousProjectId !== undefined && previousProjectId !== projectId) {
        // The component is reused between projects, so move focus like a fresh page load would.
        this.lightboxIndex.set(null);
        afterNextRender(() => this.heading()?.nativeElement.focus({ preventScroll: true }), {
          injector: this.injector,
        });
      }
      previousProjectId = projectId;
    });
  }

  featureNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  goBackToProjects(): void {
    if (this.cameFromLandingPage()) {
      // Real history step so the router restores the visitor's scroll position.
      this.location.back();
    } else {
      this.navigationService.navigateToElementOnMainPage(PageSectionNames.Projects);
    }
  }

  private cameFromLandingPage(): boolean {
    const state = this.location.getState() as Record<string, unknown> | null;
    return state?.[OPENED_FROM_LANDING_STATE] === true;
  }
}

export interface ProjectImage {
  /** Downscaled WebP (max 1280px wide) for in-page cards. */
  thumb: string;
  /** Full-resolution WebP for the lightbox. */
  full: string;
  width: number;
  height: number;
}

export interface Feature {
  featurePhoto: ProjectImage;
  featureTitle: string;
  featureDescription: string;
}

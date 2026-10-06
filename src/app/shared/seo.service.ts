import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export const SITE_URL = 'https://amadeuszlewandowski.pl';
export const SITE_NAME = 'Amadeusz Lewandowski';
const OG_IMAGE = { url: `${SITE_URL}/assets/og-image.png`, width: '1200', height: '630' };
const OG_LOCALES: Record<string, string> = { pl: 'pl_PL', en: 'en_US', de: 'de_DE', es: 'es_ES' };
const JSON_LD_ID = 'seo-json-ld';

export interface SeoPage {
  /** Path with leading and trailing slash, matching how GitHub Pages serves the prerendered `index.html`. */
  path: string;
  titleKey: string;
  descriptionKey: string;
  /** Appends " | Amadeusz Lewandowski" to the translated title. */
  appendSiteName?: boolean;
  jsonLd?: object;
  noindex?: boolean;
}

/**
 * Keeps the document head (title, description, canonical, Open Graph, JSON-LD) in sync with the current page
 * and language. Runs during prerender too, so crawlers get the tags without executing JavaScript.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);
  private pageSubscription?: Subscription;

  constructor() {
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.document.documentElement.lang = lang;
      this.meta.updateTag({ property: 'og:locale', content: OG_LOCALES[lang] ?? OG_LOCALES['pl'] });
    });
  }

  setPage(page: SeoPage): void {
    const url = SITE_URL + page.path;
    this.setCanonical(url);
    this.setJsonLd(page.jsonLd);
    this.meta.updateTag({ name: 'robots', content: page.noindex ? 'noindex' : 'index, follow' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE.url });
    this.meta.updateTag({ property: 'og:image:width', content: OG_IMAGE.width });
    this.meta.updateTag({ property: 'og:image:height', content: OG_IMAGE.height });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE.url });

    this.pageSubscription?.unsubscribe();
    this.pageSubscription = this.translate
      .stream([page.titleKey, page.descriptionKey])
      .subscribe((translations: Record<string, string>) => {
        const translatedTitle = translations[page.titleKey];
        const title = page.appendSiteName ? `${translatedTitle} | ${SITE_NAME}` : translatedTitle;
        const description = translations[page.descriptionKey];
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ name: 'twitter:description', content: description });
      });
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(data: object | undefined): void {
    const existing = this.document.getElementById(JSON_LD_ID);
    if (!data) {
      existing?.remove();
      return;
    }
    const script = existing ?? this.document.createElement('script');
    script.id = JSON_LD_ID;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    if (!existing) {
      this.document.head.appendChild(script);
    }
  }
}

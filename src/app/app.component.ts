import { Component, inject } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SeoService} from "./shared/seo.service";
import {DEFAULT_LANGUAGE, readStoredLanguage} from "./shared/language";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'portfiolioA';
  // Created before the first language is set so it can mirror it into <html lang>.
  private readonly seoService = inject(SeoService);

  constructor(private translate: TranslateService) {
    const supportedLanguages = ['pl', 'en', 'de', 'es'];
    const storedLanguage = readStoredLanguage();
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.translate.use(storedLanguage && supportedLanguages.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE);
  }
}

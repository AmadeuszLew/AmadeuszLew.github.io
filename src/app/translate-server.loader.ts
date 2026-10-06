import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';
import pl from '../assets/i18n/pl.json';

const TRANSLATIONS = new Map<string, TranslationObject>([
  ['de', de],
  ['en', en],
  ['es', es],
  ['pl', pl],
]);

// During SSR/prerender there is no HTTP server to fetch ./assets/i18n/*.json from,
// so the server bundle ships the translations directly.
export class TranslateServerLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS.get(lang) ?? en);
  }
}

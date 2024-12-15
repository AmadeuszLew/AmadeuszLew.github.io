import {LanguageSelector} from "./language-selector.model";

export class LanguageSelectorProviderService {
  private languages:LanguageSelector[] = [
    new LanguageSelector("us", "EN","US Flag", false),
    new LanguageSelector("pl", "PL", "PL Flag", false),
    new LanguageSelector("es", "ES","ES Flag", false),
    new LanguageSelector("de", "DE", "DE Flag", false),
    new LanguageSelector("fr", "FR","FR Flag", false),
  ];

  getLanguages(): LanguageSelector[] {
    return this.languages;
  }
}

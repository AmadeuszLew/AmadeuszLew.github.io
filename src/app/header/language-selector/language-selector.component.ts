import { Component } from '@angular/core';
import {LanguageSelector} from "./language-selector.model";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSelectorProviderService} from "./language-selector-provider.service";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  languages: LanguageSelector[];
  selectedLanguage: LanguageSelector;
  showSelector = false;

  constructor(
    private readonly translate: TranslateService,
    private readonly languageSelectorProviderService:LanguageSelectorProviderService) {
      this.languages = this.languageSelectorProviderService.getLanguages();
      const browserLang:unknown = this.translate.getBrowserLang();
      if(typeof browserLang === "string" &&
        this.languages.some((lang:LanguageSelector) => lang.name.toLowerCase() === browserLang.toLowerCase())) {
          this.translate.setDefaultLang(browserLang);
          this.translate.use(browserLang);
          this.changeSelectedLanguage(browserLang);
      } else {
          this.translate.setDefaultLang('en');
          this.translate.use('en');
          this.selectedLanguage = this.languages[0];
      }
  }

  switchLanguage(language: string):void {
    this.translate.use(language.toLowerCase());
    this.changeSelectedLanguage(language);
  }

  toggleShow(): void {
    this.showSelector = !this.showSelector
  }

  private changeSelectedLanguage(language:string):void {
    this.selectedLanguage =
      this.languages.find((lang:LanguageSelector) => lang.name.toLowerCase() === language.toLowerCase()) ?? this.languages[0];
    this.showSelector = false;
  }
}

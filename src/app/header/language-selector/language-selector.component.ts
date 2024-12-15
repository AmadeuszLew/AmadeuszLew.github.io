import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LanguageSelector} from "./language-selector.model";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSelectorProviderService} from "./language-selector-provider.service";
import {AlertsService} from "../../shared/alert.service";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  @Input()
  mobile:boolean;

  @Input()
  hideExpanded:boolean;

  @Output()
  languageExpanded = new EventEmitter<boolean>();

  languages: LanguageSelector[];
  selectedLanguage: LanguageSelector;
  showSelector = false;

  constructor(
    private readonly translate: TranslateService,
    private readonly alertsService: AlertsService,
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
    setTimeout(() => {
      this.alertsService.riseAlert('success', this.translate.instant('LANGUAGE_CHANGED'));
    }, 100);

  }

  toggleShow(): void {
    this.languageExpanded.emit(true);
    this.showSelector = !this.showSelector
  }

  private changeSelectedLanguage(language:string):void {
    this.selectedLanguage = this.getSelectedLanguage(language);
    this.languages.map((lang:LanguageSelector) => {lang.isSelected = lang.name.toLowerCase() === language.toLowerCase()});
    this.showSelector = false;
  }

  private getSelectedLanguage(language:string):LanguageSelector {
    return this.languages.find((lang:LanguageSelector) => lang.name.toLowerCase() === language.toLowerCase()) ?? this.languages[0];
  }
}

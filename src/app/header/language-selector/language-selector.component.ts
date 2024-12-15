import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LanguageSelector} from "./language-selector.model";
import {TranslateService} from "@ngx-translate/core";
import {LanguageSelectorProviderService} from "./language-selector-provider.service";
import {AlertsService} from "../../shared/alert.service";
import {skip} from "rxjs";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input()
  mobile:boolean;

  @Input()
  hideExpanded:boolean;

  @Output()
  languageExpanded = new EventEmitter<boolean>();

  languages: LanguageSelector[];
  selectedLanguage: LanguageSelector;
  showSelector = false;
  browserLanguage:unknown;

  constructor(
    private readonly translate: TranslateService,
    private readonly alertsService: AlertsService,
    private readonly languageSelectorProviderService:LanguageSelectorProviderService) {
    console.log(new Date(), "LanguageSelectorComponent initialized")
      this.languages = this.languageSelectorProviderService.getLanguages();
      this.browserLanguage = this.translate.getBrowserLang();
      if(typeof this.browserLanguage === "string" &&
        this.languages.some((lang:LanguageSelector) => lang.name.toLowerCase() === (this.browserLanguage as string).toLowerCase())) {
          this.switchLanguage(this.browserLanguage)
      } else {
          this.translate.setDefaultLang('en');
          this.translate.use('en');
          this.selectedLanguage = this.languages[0];
      }
  }
  ngOnInit() {
    debugger;
    this.translate.onLangChange
      .pipe(
        skip(this.browserLanguage ? 2 : 0)
      ).subscribe(():void => {
      this.alertsService.riseAlert('success', this.translate.instant('LANGUAGE_CHANGED'));
    });
  }

  switchLanguage(language: string):void {
    this.translate.use(language.toLowerCase());
    this.changeSelectedLanguage(language);
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

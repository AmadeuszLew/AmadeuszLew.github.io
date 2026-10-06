import {Component, ElementRef, OnInit, effect, inject, input, output, signal, viewChild} from '@angular/core';
import {LanguageSelector} from "./language-selector.model";
import {TranslateService} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {LanguageSelectorProviderService} from "./language-selector-provider.service";
import {AlertsService} from "../../shared/alert.service";
import {skip} from "rxjs";

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.css'],
    standalone: true,
    imports: [NgClass],
    host: {
      '(document:keydown.escape)': 'closeOnEscape()',
      '(document:click)': 'closeOnOutsideClick($event)',
    },
})
export class LanguageSelectorComponent implements OnInit {
  readonly mobile = input(false);
  /** Set while another header menu is open; the selector must stay closed meanwhile. */
  readonly hideExpanded = input(false);
  readonly languageExpanded = output<boolean>();

  private readonly translate = inject(TranslateService);
  private readonly alertsService = inject(AlertsService);
  private readonly languageSelectorProviderService = inject(LanguageSelectorProviderService);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  languages: LanguageSelector[];
  selectedLanguage: LanguageSelector;
  readonly showSelector = signal(false);
  browserLanguage:unknown;

  constructor() {
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

    effect(() => {
      if (this.hideExpanded()) {
        this.showSelector.set(false);
      }
    });
  }

  ngOnInit() {
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
    this.showSelector.update((show) => !show);
  }

  closeOnOutsideClick(event: MouseEvent): void {
    if (this.showSelector() && !event.composedPath().includes(this.host.nativeElement)) {
      this.showSelector.set(false);
    }
  }

  closeOnEscape(): void {
    if (this.showSelector()) {
      this.showSelector.set(false);
      this.trigger().nativeElement.focus();
    }
  }

  private changeSelectedLanguage(language:string):void {
    this.selectedLanguage = this.getSelectedLanguage(language);
    this.languages.map((lang:LanguageSelector) => {lang.isSelected = lang.name.toLowerCase() === language.toLowerCase()});
    this.showSelector.set(false);
  }

  private getSelectedLanguage(language:string):LanguageSelector {
    return this.languages.find((lang:LanguageSelector) => lang.name.toLowerCase() === language.toLowerCase()) ?? this.languages[0];
  }
}

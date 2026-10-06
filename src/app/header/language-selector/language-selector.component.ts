import {Component, ElementRef, effect, inject, input, output, signal, viewChild} from '@angular/core';
import {LanguageSelector} from "./language-selector.model";
import {TranslateService} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {LanguageSelectorProviderService} from "./language-selector-provider.service";
import {AlertsService} from "../../shared/alert.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {DEFAULT_LANGUAGE, storeLanguage} from "../../shared/language";

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
export class LanguageSelectorComponent {
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

  constructor() {
    // The initial language is chosen in AppComponent; the selector only mirrors it.
    this.languages = this.languageSelectorProviderService.getLanguages();
    this.changeSelectedLanguage(this.translate.currentLang ?? DEFAULT_LANGUAGE);
    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(({lang}) => this.changeSelectedLanguage(lang));

    effect(() => {
      if (this.hideExpanded()) {
        this.showSelector.set(false);
      }
    });
  }

  switchLanguage(language: string):void {
    const lang = language.toLowerCase();
    storeLanguage(lang);
    this.translate.use(lang).subscribe(():void => {
      this.alertsService.riseAlert('success', this.translate.instant('LANGUAGE_CHANGED'));
    });
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

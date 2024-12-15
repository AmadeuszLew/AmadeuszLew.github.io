import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfiolioA';
  constructor(private translate: TranslateService, private readonly meta: Meta,) {
    this.translate.setDefaultLang('en');

    this.translate.use('en');

    this.meta.addTags([
      { name: 'description', content: 'Portfolio Amadeusza Lewandowskiego, programisty z Poznania.' },
      { name: 'keywords', content: 'Amadeusz Lewandowski, Programista, Poznań, Inowrocław' },
      { name: 'author', content: 'Amadeusz Lewandowski' },
    ]);
  }
}

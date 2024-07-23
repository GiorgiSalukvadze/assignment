import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarItems } from '../../const/navbar.const';
import { LANG_KEY, Languages } from '../../const/lang.const';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NgClass, TranslateModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  navbarItems = NavbarItems;
  selectedLanguage: Languages = Languages.GE;
  translateService = inject(TranslateService);

  ngOnInit() {
    this.selectedLanguage = (localStorage.getItem(LANG_KEY) as Languages) || Languages.GE;
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  switchLanguage() {
    this.selectedLanguage = this.selectedLanguage === Languages.GE ? Languages.EN : Languages.GE;
    localStorage.setItem(LANG_KEY, this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }
}

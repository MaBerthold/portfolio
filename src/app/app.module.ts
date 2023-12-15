import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { ArrowSliderComponent } from './main-content/arrow-slider/arrow-slider.component';
import { ArrowSlider2Component } from './main-content/arrow-slider2/arrow-slider2.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ArrowSlider3Component } from './main-content/arrow-slider3/arrow-slider3.component';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillsComponent,
    ArrowSliderComponent,
    ArrowSlider2Component,
    PortfolioComponent,
    ArrowSlider3Component,
    MenuComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

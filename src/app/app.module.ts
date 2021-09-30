import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { TemplatevariablesComponent } from './mytest/templatevariables/templatevariables.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeclycleComponent } from './lifeclycle/lifeclycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    TemplatevariablesComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifeclycleComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

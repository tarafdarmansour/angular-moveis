import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { TemplatevariablesComponent } from './mytest/templatevariables/templatevariables.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';

@NgModule({
  declarations: [AppComponent, MoviesListComponent, TemplatevariablesComponent, GenericListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

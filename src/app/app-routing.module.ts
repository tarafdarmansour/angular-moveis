import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theater/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditMovieTheaterComponent } from './movie-theater/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenresComponent },
  { path: 'genres/edit/:id', component: EditGenresComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },

  { path: 'movietheaters', component: IndexMovieTheaterComponent },
  { path: 'movietheaters/create', component: CreateMovieTheaterComponent },
  { path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent },

  { path: 'movies/create', component: CreateMovieComponent },
  { path: 'movies/edit/:id', component: EditMovieComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { FilmType } from './shared/models/Film-type.enum';
import { MoviesListComponent } from './shared/movies-list/movies-list.component';


const routes: Routes = [


  {
    path: "trendingmovie", component: MoviesListComponent,
    data: {
      type: FilmType,
      trending:true,
      title: 'trendingmovie',
      descirption: 'trendingmovie Movies ,etc'
    }
  },
  {
    path: "action", component: MoviesListComponent,
    data: {
      type: FilmType.Animation,
      title: 'animation',
      descirption: 'animation Movies -war,action,etc'
    }
  },
  {
    path: "adventure", component: MoviesListComponent,
    data: {
      type: FilmType.Adventure,
      title: 'adventure',
      descirption: 'adventure Movies '
    }
  },
  { path: "animation", component: MoviesListComponent,
    data: {
      type: FilmType.Animation,
      title: 'animation',
      descirption: 'animation Movies -war,action,etc'
    }
  },

  {
    path: "comedy", component: MoviesListComponent,
    data: {
      type: FilmType.Comedy,
      title: 'Comedy',
      descirption: 'Comedy Movies -war,action,etc'
    }
  },
  {
    path: "documentary", component: MoviesListComponent,
    data: {
      type: FilmType.Documentary,
      title: 'Documentary',
      descirption: 'Documentary Movies -war,action,etc'
    }
  },
  {
    path: "adventure", component: MoviesListComponent,
    data: {
      type: FilmType.Adventure,
      title: 'adventure',
      descirption: 'adventure Movies -war,action,etc'
    }
  },
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

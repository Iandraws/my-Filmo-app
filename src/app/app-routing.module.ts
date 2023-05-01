import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingmovieComponent } from './trendingmovie/trendingmovie.component';
import { ActionComponent } from './action/action.component';
import { AnimationComponent } from './animation/animation.component';
import { ComedyComponent } from './comedy/comedy.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { AdventureComponent } from './adventure/adventure.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  {path:"trendingmovie",component:TrendingmovieComponent},
  {path:"action",component:ActionComponent},
  {path:"adventure",component:AdventureComponent},
  {path:"animation",component:AnimationComponent},
  {path:"comedy",component:ComedyComponent},
  {path:"documentary",component:DocumentaryComponent},
  {path:"adventure",component:AdventureComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

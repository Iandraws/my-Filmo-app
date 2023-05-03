import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TrendingmovieComponent } from './trendingmovie/trendingmovie.component';
import { ActionComponent } from './action/action.component';
import { AnimationComponent } from './animation/animation.component';
import { ComedyComponent } from './comedy/comedy.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { AdventureComponent } from './adventure/adventure.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


  


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    TrendingmovieComponent,
    ActionComponent,
    AnimationComponent,
    ComedyComponent,
    DocumentaryComponent,
    AdventureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,MatToolbarModule
    ,MatIconModule
    ,MatButtonModule
    ,MatInputModule
    ,HttpClientModule
    ,MatCardModule
    ,MatGridListModule
    ,MatSidenavModule
    ,MatListModule
    ,ReactiveFormsModule,
    RouterLink

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

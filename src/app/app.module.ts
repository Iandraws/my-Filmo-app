import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { FilmCardComponent } from './shared/components/film-card/film-card.component';
import { MoviesListComponent } from './shared/movies-list/movies-list.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { LoginComponentComponent } from './login.component/login.component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    FilmCardComponent,
    MoviesListComponent,
    LoginComponentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    , MatToolbarModule,
    FormsModule
    , MatIconModule
    , MatButtonModule
    , MatInputModule
    , HttpClientModule
    , MatCardModule
    , MatGridListModule
    , MatSidenavModule
    , MatListModule
    , ReactiveFormsModule,
    RouterLink
    ,MatTooltipModule
    ,MatTableModule
    ,MatFormFieldModule
    ,MatDialogModule
    ,MatSnackBarModule
    ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

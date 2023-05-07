import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Film } from '../models/film.model';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmType } from '../models/Film-type.enum';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {

  films$: Observable<Film[]>;

  constructor(private movieApiServiceService: MovieApiServiceService, private title: Title, private meta: Meta, private route: ActivatedRoute, private searchService: SearchService) {
   
  }

  ngOnInit(): void {


    this.films$ =
      this.route.data.pipe(
        tap((data) => {
          this.title.setTitle(data['title']);
          this.meta.updateTag({ name: 'description', content: data['description'] });
        }),
        switchMap((data) =>

          this.searchService.search$.pipe(

            distinctUntilChanged(),
            debounceTime(500),
            switchMap(search => this.movieApiServiceService.fetchFilms(data['type'] as FilmType, search)))),
        map((result) => result.results))

  }
}
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Film } from '../shared/models/film.model';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentaryComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Documentary Movies -ShowTime');
    this.meta.updateTag({ name: 'description', content: 'Documentary Movies -war,action,etc' });
  }

  ngOnInit(): void {
    this.films$ = this.service.fetchDocumentaryMovies().pipe(map((result) => result.results));
  }
}

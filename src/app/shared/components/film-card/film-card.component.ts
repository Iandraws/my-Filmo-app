import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmCardComponent {
  @Input() film: Film;
}

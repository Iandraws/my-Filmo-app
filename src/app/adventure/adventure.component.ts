import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent {

  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) { }
  adventureMovieResult: any = [];
  ngOnInit(): void {
    this.adventureMovie();
    this.title.setTitle('Adventure - showtime');
    this.meta.updateTag({ name: 'description', content: 'watch online movies' });
  }
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
}

import { Component } from '@angular/core';
import { MovieApiServiceService } from './service/movie-details.service';
import { OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({ name: 'description', content: 'watch online movies' });

  }

  ngOnInit(): void {
  }
}
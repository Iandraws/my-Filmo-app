import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  
    constructor( private service:MovieApiServiceService) { }


  actionMovieResult: any = [];
  ngOnInit(): void {
    this.actionMovie();
  }
actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.actionMovieResult = result.results;
  });
}
}

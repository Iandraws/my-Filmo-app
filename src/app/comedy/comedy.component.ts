import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent {

  constructor(private service:MovieApiServiceService, private title:Title,private meta:Meta) {
    this.title.setTitle('Comedy Movies -ShowTime');
    this.meta.updateTag({name:'description',content:'Comedy Movies -war,action,etc'});
   }
    ngOnInit(): void {
      this.comedyMovie();
    }

  comedyMovieResult: any = [];

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  

  }






}

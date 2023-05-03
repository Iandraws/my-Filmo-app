import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  
    constructor(private service:MovieApiServiceService, private title:Title,private meta:Meta ) { 

      this.title.setTitle('Action Movies -ShowTime');
      this.meta.updateTag({name:'description',content:'Action Movies -war,action,etc'});
    }


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

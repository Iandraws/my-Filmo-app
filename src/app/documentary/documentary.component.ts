import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent {
  
    constructor(private service:MovieApiServiceService, private title:Title,private meta:Meta) {
      this.title.setTitle('Documentary Movies -ShowTime');
      this.meta.updateTag({name:'description',content:'Documentary Movies -war,action,etc'});
     }
     ngOnInit(): void {
       this.documentaryMovie();
     }

  documentaryMovieResult: any = [];

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  

  }


}

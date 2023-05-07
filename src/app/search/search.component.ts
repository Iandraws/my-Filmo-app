import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: MovieApiServiceService, private title: Title, private meta: Meta) {
    this.title.setTitle('Search Movies -ShowTime');
    this.meta.updateTag({ name: 'description', content: 'Search Movies -war,action,etc' });

  }
  searchMovieData: any | null;




  ngOnInit(): void {

  }
  searchMovieForm = new FormGroup({
    movieName: new FormControl('')
  });

  submitSearchMovieForm() {
    console.log(this.searchMovieForm.value, 'searchmovieform#');
    this.service.getSearchMovie({ movieName: this.searchMovieForm.value.movieName as string }).subscribe((result) => {
      console.log(result, 'searchresult#');
      this.searchMovieData = result.results;
    });
  }


}

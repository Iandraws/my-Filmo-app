import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-trendingmovie',
  templateUrl: './trendingmovie.component.html',
  styleUrls: ['./trendingmovie.component.css']
})
export class TrendingmovieComponent {
  trendingMovieResult: any = [];
https: any;
  constructor(private service:MovieApiServiceService, private title:Title,private meta:Meta) { }

  ngOnInit(): void {
    this.trendingData();
    this.title.setTitle('Trending - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
  }
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

}

import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmResult } from '../shared/models/film.model';
import { Film } from '../shared/models/film.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private title: Title, private meta: Meta) { }
  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;
  result: any;
  castData: [];
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getVideo(getParamId);
    this.getMovie(getParamId);
     this.getMovieCast(getParamId);
     this.result=this.castData
  }
 


  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;

      // // facebook
      // this.meta.updateTag({ property: 'og:type', content: "website" });
      // this.meta.updateTag({ property: 'og:url', content: `` });
      // this.meta.updateTag({ property: 'og:title', content: this.getMovieDetailResult.original_title });
      // this.meta.updateTag({ property: 'og:description', content: this.getMovieDetailResult.overview });
      // this.meta.updateTag({ property: 'og:image', content: `https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}` });

    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      });

    });
  }
  

 getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result)=>{
      this.getMovieCastResult=result.cast;
      console.log(result,'movieCast#');
    });
  }
  displayedColumns: string[] = ['name', 'gender', 'known_for_department',];
}

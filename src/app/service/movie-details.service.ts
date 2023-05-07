import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CastResult, FilmResult } from '../shared/models/film.model';
import { FilmType } from '../shared/models/Film-type.enum';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private httpClient: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  //bannerapidata

  bannerApiData(): Observable<FilmResult> {
    return this.httpClient.get<FilmResult>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  // searchmovive
  getSearchMovie(data: { movieName: string }): Observable<FilmResult> {
    console.log(data, 'movie#');

    return this.httpClient.get<FilmResult>(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: string): Observable<FilmResult> {
    return this.httpClient.get<FilmResult>(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: string): Observable<FilmResult> {
    return this.httpClient.get<FilmResult>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // // getMovieCast
  // getMovieCast(data: string): Observable<CastResult> {
  //   return this.httpClient.get<CastResult>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  // }


  fetchFilms(type: FilmType, search: string): Observable<FilmResult> {
    const params = new HttpParams().set("api_key", this.apikey).set("with_genres", type.toString()).set('query', search);

    let url = `${this.baseurl}/discover/movie`;
    if (search) {
      url = `${this.baseurl}/search/movie`;

    }
    if (type === FilmType.Trending) {
      url = `${this.baseurl}/trending`;
    }
    return this.httpClient.get<FilmResult>(url, { params: params });
  }

 


}

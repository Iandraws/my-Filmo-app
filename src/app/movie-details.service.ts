import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http: HttpClient) { }

  getMovieDetails(): Observable<any> {
    const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=123b907e16f28387984dc84b1ab06fc2';
    return this.http.get(apiUrl);
    
  }
}

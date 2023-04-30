import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailsService } from './movie-details.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

    constructor(private movieDetailsService: MovieDetailsService) { }
  
    ngOnInit(): void {
      this.movieDetailsService.getMovieDetails().subscribe((data) => {
        console.log(data);
      });
    }

}

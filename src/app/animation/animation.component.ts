import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-details.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {

  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Animation - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
    this.animationMovie();
  }

  animationMovieResult: any = [];

  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  


}

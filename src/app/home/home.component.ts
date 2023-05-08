import { Component } from '@angular/core';

interface Route {
  path: string,
  label: string,
  icon?: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  opened = false;

  routes: Route[] = [
    { path: 'trendingmovie', label: "trendingmovie" },
    { path: 'action', label: "action" },
    { path: 'adventure', label: "adventure" },
    { path: 'animation', label: "animation" },
    { path: 'comedy', label: "comedy" },
    { path: 'documentary', label: "documentary" },
   
  ]
  constructor() { }

}

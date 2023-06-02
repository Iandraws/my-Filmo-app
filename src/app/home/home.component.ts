import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponentComponent } from '../login.component/login.component.component';
import { RegisterComponent } from '../register/register.component';

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
  constructor( private dialog:MatDialog) { }
  openLoginDialog(): void {
    this.dialog.open(LoginComponentComponent, {
        width: '300px',
        
    });
  }
  toggleSidebar(): void {
    this.opened = !this.opened;
  }
  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
        width: '400px',
        height: '500px'
        
    });
  }


}

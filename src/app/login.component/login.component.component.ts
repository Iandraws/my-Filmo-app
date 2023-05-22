import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login.component',
  templateUrl: './login.component.component.html',
  styleUrls: ['./login.component.component.css']

})
export class LoginComponentComponent {
  identifier: string;
  password: string;
  isLoading: boolean = false;

  constructor(private authService: AuthService,) { }

  onSubmit(): void {
    const credentials = {
      identifier: this.identifier,
      password: this.password
    };

    this.isLoading = true;

    this.authService.login(credentials)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response: any) => {
          // Assuming the response contains the access token
          const accessToken = response.accessToken; // Update the property/key name based on the actual response
          this.authService.saveAccessToken(accessToken);
          console.log(response);
          
          
          
          // Redirect to the desired page or perform any other necessary actions


        },
        error: (error: any) => {
          // Handle login error
        }
      });
  }
}
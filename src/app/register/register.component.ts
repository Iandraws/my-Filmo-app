import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor( private authService: AuthService,  ) { }
  displayName: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean = false;
  active: boolean = true;
  isLoading: boolean = false;
  isLogedIn: boolean = false;
  snackbarMessage: string = ''; // Variable to hold the Snackbar message
  snackBar: any;



  onSubmit(): void {
    const credentials = {
      displayName: this.displayName,
      username: this.username,
      email: this.email,
      password: this.password,
      isAdmin: this.isAdmin,
      active: this.active
    };



    this.isLoading = true;




    this.authService.register(credentials)  // <-- Register method from the AuthService
      .subscribe({
        next: (response: any) => {
          // Assuming the response contains the access token
          const accessToken = response.accessToken; // Update the property/key name based on the actual response
          this.authService.saveAccessToken(accessToken);
          this.isLogedIn = true;
          this.isLoading = false;
          this.snackbarMessage = 'Registration successful!';
          this.snackBar.open(this.snackbarMessage, 'Close', { duration: 3000 });
          console.log(response);

          // Redirect to the desired page or perform any other necessary actions
        }
      });

}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component'; // Replace with the actual path to your register component



@Component({
  selector: 'app-login.component',
  templateUrl: './login.component.component.html',
  styleUrls: ['./login.component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  identifier: string;
  password: string;
  isLoading: boolean = false;
  isLogedIn: boolean = false;
  snackbarMessage: string = ''; // Variable to hold the Snackbar message
  snackBar: any;

  constructor(private authService: AuthService,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.checkLogin();
  }

  onSubmit(): void {
    const credentials = {
      identifier: this.identifier,
      password: this.password,
    };


    this.isLoading = true;

    this.authService
      .login(credentials)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response: any) => {
          // Assuming the response contains the access token
          const accessToken = response.accessToken; // Update the property/key name based on the actual response
          this.authService.saveAccessToken(accessToken);
          this.isLogedIn = true;
          this.isLoading = false;
        

          console.log(response);

          // Redirect to the desired page or perform any other necessary actions
        },
        error: (error: any) => {
          this.isLoading = false;

          // Handle login error
        },
      });
  }
  logout(): void {
    this.authService.clearAccessToken();
    this.isLogedIn = false;
    this.isLoading = false;
    this.identifier = '';
    this.password = '';

   
  }
  checkLogin(): void {
    if (this.authService.getAccessToken()) {
      this.isLogedIn = true;
      this.isLoading = false;
    } else {
      this.isLogedIn = false;
      this.isLoading = false;
    }
  }
  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '400px', 
      height: '500px',
      disableClose: false, 
      autoFocus: true,
      data: { name: 'Register' },
    });
  }
}

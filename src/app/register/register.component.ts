import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor( private authService:AuthService,private snackbar:MatSnackBar,private dialog:MatDialog) {}
  displayName: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean = false;
  active: boolean = true;
  isLoading: boolean = false;
  isLogedIn: boolean = false;
  snackbarMessage: string = ''; // Variable to hold the Snackbar message
  isRegister: boolean = false;

  onSubmit(): void {
    const credentials = {
      username: this.username,
      email: this.email,
      displayName: this.displayName,
      password: this.password,
      active: this.active,
      isAdmin: this.isAdmin,
    };

    this.isLoading = true;
console.log(credentials);

   
    


    this.authService
      .register(credentials).subscribe({
        next: (response: any) => {
          console.log(response);
          this.snackbarMessage = 'Register successfully';
          this.snackbar.open(this.snackbarMessage, 'Close', {
            duration: 3000,
          });
          this.isRegister = true;
          this.dialog.closeAll();

          // Redirect to the desired page or perform any other necessary actions
        },
        error: (error: any) => {
          this.isLoading = false;

          // Handle login error

        },
      });



    };

}


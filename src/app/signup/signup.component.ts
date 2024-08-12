import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const fullName = (document.getElementById('fullName') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement)
      .value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    this.authService.register(fullName, email, username, password).subscribe({
      next: (response: { success: any }) => {
        if (response.success) {
          this.router.navigate(['/login']);
        } else {
          alert('Registration failed');
        }
      },
      error: (error: any) => {
        console.error('Registration error', error);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  showPassword: boolean = false;
  buttonText = 'LOGIN';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToSignupPage() {
    this.router.navigate(['/signup']);
  }

  submitDetails() {
    //call API for login and redirect to dashboard on success
    this.router.navigate(['/dashboard']);
  }
}

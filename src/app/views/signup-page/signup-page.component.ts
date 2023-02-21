import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  showPassword: boolean = false;
  buttonText = 'SIGN UP';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  submitDetails() {
    //call API for signup and redirect to dashboard on success
    this.router.navigate(['/dashboard']);
  }
}

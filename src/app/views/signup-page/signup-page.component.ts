import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  showPassword: boolean = false;
  buttonText = 'SIGN UP';
  signupForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  submitDetails() {
    //call API for signup and redirect to dashboard on success
    console.log(this.signupForm.value);
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_PATTERN_VALIDATION, PASSWORD_PATTERN_VALIDATION } from 'src/constants/form-validations';
import { Errors } from 'src/constants/error-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginVisible = true;
  loginForm: FormGroup;
  signupForm: FormGroup;
  errorMessages = Errors;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN_VALIDATION)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      locale: new FormControl('en'),
      signupEmail: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN_VALIDATION)]),
      signupPassword: new FormControl('', [
        Validators.required, Validators.minLength(8), this.passwordValidator(PASSWORD_PATTERN_VALIDATION)
      ]),
      passwordConfirmation: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);
  }

  onSubmit() {
    if (this.isLoginVisible) {
      console.table(this.loginForm.value);
    } else {
      this.signupForm.get('locale').setValue('en');
      console.table(this.signupForm.value);
    }
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/']);
  }

  toggleContent() {
    this.isLoginVisible = !this.isLoginVisible;
    this.loginForm.reset();
    this.signupForm.reset();
  }

  passwordMatchValidator(control: FormGroup) {
    const password = control.get('signupPassword');
    const confirmPassword = control.get('passwordConfirmation');
    return (password && confirmPassword &&  password.value !== confirmPassword.value) ? { mismatch: true } : null;
  }

  passwordValidator(expression: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isPasswordValid = expression.test(control.value);
      return isPasswordValid ? null : { 'password': true };
    };
  }

}

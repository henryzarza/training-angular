import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_PATTERN_VALIDATION } from './constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginVisible = true;
  loginForm: FormGroup;
  signupForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN_VALIDATION)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      locale: new FormControl('en', Validators.required),
      signupEmail: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN_VALIDATION)]),
      signupPassword: new FormControl('', [
        Validators.required, Validators.minLength(8), this.passwordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)
      ]),
      passwordConfirmation: new FormControl('')
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.isLoginVisible) {
      console.table(this.loginForm.value);
    } else {
      console.table(this.signupForm.value);
    }
  }

  toggleContent() {
    this.isLoginVisible = !this.isLoginVisible;
    this.loginForm.reset();
    this.signupForm.reset();
  }

  passwordMatchValidator(control: AbstractControl) {
    if (control.get('signupPassword').value !== control.get('passwordConfirmation').value) {
      return { 'mismatch': true };
    }
  }

  passwordValidator(expression: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isPasswordValid = expression.test(control.value);
      return isPasswordValid ? null : { 'password': true };
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_PATTERN_VALIDATION, PASSWORD_PATTERN_VALIDATION } from 'src/constants/form-validations';

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
        Validators.required, Validators.minLength(8), this.passwordValidator(PASSWORD_PATTERN_VALIDATION)
      ]),
      passwordConfirmation: new FormControl('', Validators.required)
    }, { validators: this.passwordMatchValidator }); // TODO check this because it doesn't work
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

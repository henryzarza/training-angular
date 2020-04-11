import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginVisible = true;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    console.table(this.form.value);
  }

  toggleContent() {
    this.isLoginVisible = !this.isLoginVisible;
    if (this.isLoginVisible) {
      this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      });
    } else {
      this.form = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        locale: new FormControl('en', Validators.required),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$')]),
        password: new FormControl('', [
          Validators.required, Validators.minLength(8), this.passwordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)
        ]),
        passwordConfirmation: new FormControl('', [Validators.required, this.passwordMatchValidator()])
      });
    }
  }

  passwordMatchValidator() {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return control.value === this.form.get('password').value ? null : { 'mismatch': true }
    };
  }

  passwordValidator(expression: RegExp) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isPasswordValid = expression.test(control.value);
      return isPasswordValid ? null : { 'password': true };
    };
  }

}

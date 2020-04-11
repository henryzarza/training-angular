import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Errors } from 'src/constants/error-messages';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() type = 'text';
  @Input() value: string;
  control: NgControl;
  errorMessages = Errors;

  constructor(@Self() @Optional() control: NgControl) {
    if (control) {
      control.valueAccessor = this;
      this.control = control;
    }
  }

  ngOnInit() {
    if (this.value) {
      this.onChange();
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  markAsTouched() {
    if (this.control) {
      this.control.control.markAsTouched();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.markAsTouched = fn;
  }

  onChange() {
    this.propagateChange(this.value);
  }

  propagateChange = (_: any) => {};
}

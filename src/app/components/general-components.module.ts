import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [InputComponent, LoaderComponent],
  exports: [InputComponent, LoaderComponent],
  imports: [CommonModule, FormsModule],
})
export class GeneralComponentsModule {}

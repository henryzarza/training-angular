import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, LoaderComponent, ModalComponent],
  exports: [InputComponent, LoaderComponent, ModalComponent],
  imports: [CommonModule, FormsModule],
})
export class GeneralComponentsModule {}

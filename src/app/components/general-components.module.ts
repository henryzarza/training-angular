import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InputComponent, LoaderComponent, ModalComponent],
  exports: [InputComponent, LoaderComponent, ModalComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
})
export class GeneralComponentsModule {}

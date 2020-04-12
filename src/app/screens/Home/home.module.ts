import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [BookCardComponent, NavbarComponent],
  exports: [BookCardComponent, NavbarComponent],
  imports: [CommonModule]
})
export class HomeModule { }

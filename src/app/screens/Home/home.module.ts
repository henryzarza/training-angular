import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  declarations: [BookCardComponent, NavbarComponent, SearcherComponent],
  exports: [BookCardComponent, NavbarComponent, SearcherComponent],
  imports: [CommonModule]
})
export class HomeModule { }

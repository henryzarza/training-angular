import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [BookCardComponent, NavbarComponent, SearcherComponent, BookDetailComponent, HomeComponent],
  exports: [BookCardComponent, NavbarComponent, SearcherComponent],
  imports: [CommonModule]
})
export class HomeModule { }

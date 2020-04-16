import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { BookListComponent } from './screens/book-list/book-list.component';

@NgModule({
  declarations: [BookCardComponent, NavbarComponent, SearcherComponent, BookDetailComponent, BookListComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule { }

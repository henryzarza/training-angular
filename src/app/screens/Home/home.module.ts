import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookCardComponent } from './components/book-card/book-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { BookListComponent } from './screens/book-list/book-list.component';
import { GeneralComponentsModule } from 'src/app/components/general-components.module';
import { BookService } from './book.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [BookCardComponent, NavbarComponent, SearcherComponent, BookDetailComponent, BookListComponent],
  imports: [CommonModule, HomeRoutingModule, GeneralComponentsModule],
  providers: [
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class HomeModule { }

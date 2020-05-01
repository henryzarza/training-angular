import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookService } from '../../book.service';
import { BookInterface } from 'src/app/interfaces/book.interface';
import { BookStateInterface, AppState } from 'src/app/app.state';
import * as BookActions from 'src/app/store/actions/books.action';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  // books: Observable<BookStateInterface[]>;
  isLoading = true;
  searcher: string;

  constructor(private bookService: BookService, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('books').subscribe(books => {
      console.log('store', books);
    });
    /* this.bookService.getBooks().subscribe(
      (response: BookInterface[]) => {
        this.isLoading = false;
        this.store.dispatch(new BookActions.AddBooks(response));
        // this.books = response;
      },
      (error) => {
        this.isLoading = false;
        console.warn(error);
      }
    ); */
  }

  changeSearcher(value: string) {
    this.searcher = value;
  }
}

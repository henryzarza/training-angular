import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { GetBooks } from 'src/app/store/actions/books.actions';
import { BookInterface } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookInterface[];
  searcher: string;
  isLoading = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('books').subscribe(({ books }) => {
      if (books) {
        this.isLoading = false;
        this.books = books;
      }
    });
    this.store.dispatch(new GetBooks());
  }

  changeSearcher(value: string) {
    this.searcher = value;
  }
}

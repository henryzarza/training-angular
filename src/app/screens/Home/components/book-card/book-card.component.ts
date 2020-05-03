import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookInterface } from 'src/app/interfaces/book.interface';
import { AppState } from 'src/app/store/state/app.state';
import { AddToCart } from 'src/app/store/actions/books.actions';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: BookInterface;

  constructor(private store: Store<AppState>) {}

  addBookToCart(event, book: BookInterface) {
    event.stopPropagation();
    this.store.dispatch(new AddToCart(book));
  }
}

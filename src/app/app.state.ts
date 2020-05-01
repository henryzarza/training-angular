import { BookInterface } from './interfaces/book.interface';

export interface BookStateInterface {
  books: BookInterface[];
  cart: BookInterface[];
}

export interface AppState {
  readonly books: BookStateInterface;
}

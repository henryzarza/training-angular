import { BookInterface } from 'src/app/interfaces/book.interface';

export interface BookStateInterface {
  books: BookInterface[];
  cart: BookInterface[];
}

export const initialBookState = {
  books: null,
  cart: null
};

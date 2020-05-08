import { EBooksActions, BookActions } from '../actions/books.actions';
import { initialBookState, BookStateInterface } from '../state/books.state';

export const bookReducer = (state = initialBookState, action: BookActions): BookStateInterface => {
  switch (action.type) {
    case EBooksActions.ADD_BOOKS:
      return { ...state, books: action.payload };
    case EBooksActions.ADD_BOOK_TO_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

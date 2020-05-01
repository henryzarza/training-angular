import * as BookActions from '../actions/books.action';

const initialState = {
  books: [],
  cart: [],
};

export function reducer(state = [initialState], action: BookActions.Actions) {
  switch (action.type) {
    case BookActions.ADD_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
}

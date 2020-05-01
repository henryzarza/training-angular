import { BookStateInterface, initialBookState } from './books.state';

export interface AppState {
  readonly books: BookStateInterface;
}

export const initialAppState: AppState = {
  books: initialBookState
};

export function getInitialState(): AppState {
  return initialAppState;
}

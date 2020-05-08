import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './books.reducer';
import { AppState } from '../state/app.state';

export const appReducers: ActionReducerMap<AppState, any> = {
  books: bookReducer
};

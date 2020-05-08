import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';

import { BookService } from 'src/app/screens/home/book.service';
import { GetBooks, EBooksActions, AddBooks, AddToCart, SetBooksToCart, RemoveFromCart } from '../actions/books.actions';
import { BookInterface } from 'src/app/interfaces/book.interface';
import { AppState } from '../state/app.state';

@Injectable()
export class BooksEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetBooks>(EBooksActions.GET_BOOKS),
    switchMap(() => this.bookService.getBooks()),
    switchMap((books: BookInterface[]) => of(new AddBooks(books))),
    catchError(error => {
      console.warn(error);
      return of(new AddBooks([]));
    })
  );

  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType<AddToCart>(EBooksActions.ADD_TO_CART),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(map(state => state.books.cart))),
    switchMap(([payload, cart]) => of(new SetBooksToCart(cart.find(el => el.id === payload.id) ? cart : [ ...cart, payload])))
  );

  @Effect()
  RemoveFromCart$ = this.actions$.pipe(
    ofType<RemoveFromCart>(EBooksActions.REMOVE_BOOK_FROM_CART),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(map(state => state.books.cart))),
    switchMap(([payload, cart]) => {
      const newCart = [...cart];
      newCart.splice(payload, 1);
      return of(new SetBooksToCart(newCart));
    })
  );

  constructor(
    private bookService: BookService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}

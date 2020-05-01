import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { BookService } from 'src/app/screens/home/book.service';
import { GetBooks, EBooksActions, AddBooks } from '../actions/books.actions';
import { BookInterface } from 'src/app/interfaces/book.interface';

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

  constructor(
    private bookService: BookService,
    private actions$: Actions
  ) {}
}

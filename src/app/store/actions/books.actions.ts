import { Action } from '@ngrx/store';
import { BookInterface } from 'src/app/interfaces/book.interface';

export enum EBooksActions {
  GET_BOOKS = '[Books] Get Books',
  ADD_BOOKS = '[Books] Add Books',
  ADD_TO_CART = '[Books] AddToCart',
  SET_BOOKS_TO_CART = '[Books] SetBooksToCart',
  REMOVE_BOOK_FROM_CART = '[Books] Remove'
}

export class GetBooks implements Action {
  readonly type = EBooksActions.GET_BOOKS;
}

export class AddBooks implements Action {
  readonly type = EBooksActions.ADD_BOOKS;

  constructor(public payload: BookInterface[]) {}
}

export class AddToCart implements Action {
  readonly type = EBooksActions.ADD_TO_CART;

  constructor(public payload: BookInterface) {}
}

export class SetBooksToCart implements Action {
  readonly type = EBooksActions.SET_BOOKS_TO_CART;

  constructor(public payload: BookInterface[]) {}
}

export class RemoveFromCart implements Action {
  readonly type = EBooksActions.REMOVE_BOOK_FROM_CART;

  constructor(public payload: number) {}
}

export type BookActions = GetBooks | AddBooks | AddToCart | SetBooksToCart | RemoveFromCart;

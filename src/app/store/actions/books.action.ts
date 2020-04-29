import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BookInterface } from 'src/app/interfaces/book.interface';

export const ADD_BOOKS = '[BOOKS] Add';
export const ADD_BOOK_TO_CART = '[BOOKS] AddToCart';
export const REMOVE_BOOK_FROM_CART = '[BOOKS] Remove';

export class AddBooks implements Action {
  readonly type = ADD_BOOKS;

  constructor(public payload: BookInterface[]) {}
}

export class AddBookToCart implements Action {
  readonly type = ADD_BOOK_TO_CART;

  constructor(public payload: BookInterface) {}
}

export class RemoveFromBook implements Action {
  readonly type = REMOVE_BOOK_FROM_CART;

  constructor(public payload: number) {}
}

export type Actions = AddBooks | AddBookToCart | RemoveFromBook;

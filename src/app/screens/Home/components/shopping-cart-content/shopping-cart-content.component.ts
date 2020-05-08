import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookInterface } from 'src/app/interfaces/book.interface';
import { AppState } from 'src/app/store/state/app.state';
import { RemoveFromCart } from 'src/app/store/actions/books.actions';

@Component({
  selector: 'app-shopping-cart-content',
  templateUrl: './shopping-cart-content.component.html',
  styleUrls: ['./shopping-cart-content.component.scss']
})
export class ShoppingCartContentComponent implements OnInit {
  data: BookInterface[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('books').subscribe(({ cart }) => {
      this.data = cart;
    });
  }

  removeBookFromCart(id: number) {
    this.store.dispatch(new RemoveFromCart(id));
  }
}

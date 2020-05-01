import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { BookInterface } from 'src/app/interfaces/book.interface';
import { GetBooks } from 'src/app/store/actions/books.actions';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: BookInterface;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('books').subscribe(({ books }) => {
      if (books) {
        this.book = books.find(el => el.id === +this.route.snapshot.paramMap.get('id'));
      } else {
        this.store.dispatch(new GetBooks());
      }
    });
  }

}

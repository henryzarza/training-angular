import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { BookInterface } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookInterface[];
  isLoading = true;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (response: BookInterface[]) => {
        this.isLoading = false;
        this.books = response;
      },
      (error) => {
        this.isLoading = false;
        console.warn(error);
      }
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from '../interfaces/book.interface';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(books: BookInterface[], value: string): BookInterface[] {
    return value ? books.filter(el => el.name.toLowerCase().includes(value)) : books;
  }

}

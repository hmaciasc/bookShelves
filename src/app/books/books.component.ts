import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => {
          books.sort((a,b) => (a.width < b.width) ? 1 : ((b.width < a.width) ? -1 : 0));

          let shelf = 1;
          let rack = 1;
          let position = 0;
          let leftSpace = 100;
          books.forEach(book => {
            let bookFits: boolean = (leftSpace - book.width) > 0;
            if (!bookFits) {
              rack++;
              leftSpace = 150;
              position = 1;
            } else {
              position++;
              leftSpace -= book.width;
            }
            if (rack > 5) {
              rack = 1;
              shelf++;
            }
            book.location = [shelf, rack, position];
          });
          this.books = books;
        });
  }
}

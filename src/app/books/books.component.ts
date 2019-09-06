import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Shelf } from '../shelf';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  shelves: Shelf[];

  constructor(private bookService: BookService) {
    this.shelves = [new Shelf, new Shelf, new Shelf];
  }

  ngOnInit() {
    this.bookService.currentState.subscribe(_ => this.getBooks());
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      books.forEach(book => {
        for (let i = 0; i < this.shelves.length; i++) {
          for (let j = 0; j < this.shelves[i].rackSpace.length; j++) {
            let bookFits: boolean = (this.shelves[i].rackSpace[j] - book.width) > 0;
            if (!bookFits) {
              continue;
            } else {
              book.location = [i+1, j+1, this.shelves[i].rackPosition[j]];
              this.shelves[i].rackPosition[j]++;
              this.shelves[i].rackSpace[j] -= book.width;
            }
            return book;
          }
        }
      });
      this.books = books;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.currentState.subscribe(books => this.books = books);
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  add(author, title: string, width: number): void {
    title = title.trim();
    author = author.trim();
    if (!title || !author || !width || width > 150) { return; }

    this.bookService.addBook({ author, title, width } as Book)
      .subscribe(book => console.log(book));
  }
}

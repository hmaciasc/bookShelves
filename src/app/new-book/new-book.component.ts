import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  books: Book[];
  book: Book;
  bookForm: FormGroup;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      'author': new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      'title': new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      'width': new FormControl("", [
        Validators.required,
        Validators.max(150)
      ])
    });
    this.bookService.currentState.subscribe(books => this.books = books);
  }

  get author() { return this.bookForm.get('author'); }
  get title() { return this.bookForm.get('title'); }
  get width() { return this.bookForm.get('width'); }

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

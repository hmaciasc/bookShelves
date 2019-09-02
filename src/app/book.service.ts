import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(catchError(this.handleError<Book[]>('getBooks', [])));
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>(`getBook id=${id}`))
    )
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

  // private getShelf(book: Book): void {
  //   console.log(this.getBooks());
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}

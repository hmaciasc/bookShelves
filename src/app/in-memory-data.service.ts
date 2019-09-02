import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 0, author: 'Yo', title: 'Libro', width: 10 },
      { id: 1, author: 'Brandon Sanderson', title: 'Final Empire', width: 60 },
      { id: 2, author: 'Brandon Sanderson', title: 'The Well of Ascension', width: 40.5 },
      { id: 3, author: 'Brandon Sanderson', title: 'The Hero of Ages', width: 50 },
      { id: 4, author: 'George R.R. Martin', title: 'A Clash of Kings', width: 30.5 },
      { id: 5, author: 'George R.R. Martin', title: 'A Storm of Swords', width: 60 },
      { id: 6, author: 'George R.R. Martin', title: 'A Feast for Crows ', width: 0.5 },
      { id: 7, author: 'George R.R. Martin', title: 'A Dance with Dragons', width: 20 },
      { id: 8, author: 'George R.R. Martin', title: 'A Storm of Swords: Blood and Gold', width: 20.5 },
      { id: 9, author: 'George R.R. Martin', title: 'A Storm of Swords: Steel and Snow', width: 30 },
      { id: 10, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms1', width: 30.5 },
      { id: 11, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms2', width: 30.5 },
      { id: 12, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms3', width: 30.5 },
      { id: 13, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms4', width: 30.5 },
      { id: 14, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms4', width: 70.5 },
      { id: 15, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms4', width: 80.5 },
      { id: 16, author: 'George R.R. Martin', title: 'A Knight of the Seven Kingdoms4', width: 80.5 },
    ];
    return { books };
  }
}

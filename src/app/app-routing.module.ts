import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-book', pathMatch: 'full' },
  { path: 'add-book', component: NewBookComponent },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

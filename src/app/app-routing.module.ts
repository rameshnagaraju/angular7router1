import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BarsComponent } from './bars/bars.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booksMenu',
    component: BooksComponent,
    outlet: 'sidebar'
  },
  {
    path: 'barsMenu',
    component: BarsComponent,
    outlet: 'sidebar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { BookListComponent } from './screens/book-list/book-list.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: '',
    component: BookListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}

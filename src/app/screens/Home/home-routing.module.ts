import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: BookDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BookListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}

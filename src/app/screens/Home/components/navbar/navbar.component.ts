import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isModalOpen = false;
  quantity: number;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('books').subscribe(({ cart }) => {
      this.quantity = cart.length;
    });
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}

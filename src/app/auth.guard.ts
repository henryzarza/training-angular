import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(_, state: RouterStateSnapshot): boolean {
    return state.url === '/login' ? this.checkNotLogin() : this.checkLogin();
  }

  checkNotLogin(): boolean {
    if (localStorage.getItem('isAuthenticated')) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

  checkLogin(): boolean {
    if (!!localStorage.getItem('isAuthenticated')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

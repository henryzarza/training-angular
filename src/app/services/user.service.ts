import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data) {
    return this.http.post(`${environment.urlBase}/user`, data);
  }

  getUser() {
    return this.http.get(`${environment.urlBase}/user`);
  }
}

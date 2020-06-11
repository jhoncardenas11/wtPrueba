import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUSers() {
    return this.http.get(`${environment.url}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${environment.url}/users/${id}`);
  }

  createUser(body: any) {
    return this.http.post(`${environment.url}/posts`, {
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin":"*"
      }
    });
  }
} 

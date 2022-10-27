import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCustomService {

  private isLoggedIn: boolean = true;

  constructor(private http: HttpClient) { }

  isLogged() {
    return this.isLoggedIn;
  }
}

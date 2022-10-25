import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserData {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserData = {
    username: '',
    password: ''
  }

  nome: string = 'pippo';

  constructor() { }

  ngOnInit(): void {
  }

  gestisciDati(data?: NgForm) {
    console.log(data);
  }

}

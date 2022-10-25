import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
  }

  gestisciDati() {
    console.log('Dati mandati');
  }

}

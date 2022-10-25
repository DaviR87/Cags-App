import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function regexpValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const testPassed: boolean = regex.test(control.value);
    return testPassed ? null : { 'regExpInvalid': { value: control.value } }
  }
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  loginForm: FormGroup;
  usernameMinLength: number = 5;
  // Only numbers RegExp
  public miaRegularExp: RegExp = new RegExp(/^\d+$/)

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(this.usernameMinLength)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), regexpValidator(this.miaRegularExp)])
    })
  }

  ngOnInit(): void {
  }

  gestisciDati() {
    console.log(this.loginForm);
  }

}

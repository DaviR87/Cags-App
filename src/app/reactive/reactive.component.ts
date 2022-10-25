import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export interface LoginForm {
  username: FormControl<string>,
  password: FormControl<string>,
  start: FormControl<string>,
  end: FormControl<string>,
}

export function regexpValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const testPassed: boolean = regex.test(control.value);
    return testPassed ? null : { 'regExpInvalid': { value: control.value } }
  }
}

export const dateValidator: ValidatorFn = (fg: FormGroup<LoginForm>) => {
  const startDate: Date = new Date(fg.controls.start.value);
  const endDate: Date = new Date(fg.get('end').value);
  return startDate !== null && endDate !== null && startDate < endDate ? null : { dateRangeInvalid: true }
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
      password: new FormControl('', [Validators.required, Validators.minLength(8), regexpValidator(this.miaRegularExp)]),
      start: new FormControl(),
      end: new FormControl(),
      isAdmin: new FormControl(false),
      streets: new FormArray([])
    }, dateValidator );

    this.loginForm.get('isAdmin').valueChanges.subscribe((val: boolean) => {
      console.log(val);
      if (val) {
        this.loginForm.get('password').clearValidators();
        this.loginForm.get('password').addValidators([Validators.required, Validators.minLength(8)]);
        this.loginForm.get('password').updateValueAndValidity();
      } else {
        // this.loginForm.get('password').clearValidators();
        this.loginForm.get('password').addValidators([regexpValidator(this.miaRegularExp)]);
        this.loginForm.get('password').updateValueAndValidity();
      }
    });
  }

  ngOnInit(): void {

  }

  addStreet() {
    const streetsFA: FormArray = this.loginForm.get('streets') as FormArray;
    streetsFA.push(new FormControl('', Validators.required));
  }

  gestisciDati(data?: FormGroup<LoginForm>) {
    console.log(this.loginForm);
  }

}

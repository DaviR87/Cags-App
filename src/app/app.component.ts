import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomeComponente: string = "app";
  title = `Ciao`;
  meteo: string = 'sole';
  checkBoxValue: boolean = false;
  frutti: {name: string, desc: string }[] = [{
    name: 'mela',
    desc: 'La mela è buona'
  },
  {
    name: 'banana',
    desc: 'La banana è gialla'
  },
  {
    name: 'kiwi',
    desc: 'Il kiwi è tondo'
  },
  {
    name: 'pesca',
    desc: 'La pesca è grande'
  }];

  // testA = 'ciao',
  // testB = 'asdasdas'

  switchProp = 'gatto';
  online: boolean = false;

  constructor() {
    this.title = `Ciao sono l'${this.nomeComponente} component`
    // this.title = "Ciao " + this.nomeComponente + " sono l'app component";
  }
}

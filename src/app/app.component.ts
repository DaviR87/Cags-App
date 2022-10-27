import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

export interface Product {
  id: number,
  inStock: boolean,
  name: string,
  price: number
}

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
  frutti: { name: string, desc: string }[] = [{
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

  tipoDiForm: string = 'reactive';

  prodotti: Product[] = [];

  loader: boolean = false;

  constructor(
    private http: HttpClient,
    public router: Router
    ) {
    this.title = `Ciao sono l'${this.nomeComponente} component`
    // this.title = "Ciao " + this.nomeComponente + " sono l'app component";

    // http.get<Product[]>('http://localhost:3000').subscribe(
    //   (response: Product[]) => {
    //     console.log(response);
    //     this.prodotti = response;
    //   },
    //   error => {
    //     console.log(error)
    //   },
    //   () => {
    //     console.log("i'm completed")
    //   })

    this.getData();
  }

  getData() {
    this.loader = true;
    this.http.get<Product[]>('http://localhost:3000/products')
    .pipe(
      finalize(() => this.loader = false)
    )
    .subscribe({
      next: (response: Product[]) => {
        console.log('next');
        this.prodotti = response;
      },
      error: (e) => {
        console.error(e)
      },
      complete: () => {
        console.info('complete');
      }
    })
  }

  goToNews() {
    this.router.navigate(['/news']);
  }
}

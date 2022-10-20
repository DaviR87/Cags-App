import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
  @Input() meteo: string = "hello world!";
  @Input() altroInput: string = '';
  public tempoUrl: string = "https://cdn-icons-png.flaticon.com/512/1555/1555512.png";
  rainImg = 'https://cdn-icons-png.flaticon.com/512/116/116251.png';
  public valore: string = "placeholder";
  public obs = interval(1000).subscribe(val => {
    console.log(val);
  });

  constructor() {
    console.log("Test constructor");
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('---------- Test onchange');
    console.log(changes);
    if (changes['meteo'] && changes['meteo'].currentValue === 'pioggia') {
      console.log('SONO DENTRO');
      this.tempoUrl = this.rainImg;
    }
  }

  ngOnInit(): void {
    console.log("Test init");
  }

  ngDoCheck(): void {
    // console.log('Test docheck')
  }

  ngOnDestroy(): void {
    console.log('Test distrutto');
    this.obs.unsubscribe();
  }

  change() {
    this.meteo = "cambiata";
    this.tempoUrl= "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
  }

}

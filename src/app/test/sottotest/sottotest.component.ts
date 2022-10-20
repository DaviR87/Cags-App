import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sottotest-component',
  templateUrl: './sottotest.component.html',
  styleUrls: ['./sottotest.component.css']
})
export class SottotestComponent implements OnInit {

  constructor() { 
    // console.log("SottotestComponent construnctor");
  }

  ngOnInit(): void {
    // console.log("SottotestComponent init");
  }

}

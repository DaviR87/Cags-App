import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface MyParams {
  id: number;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('News inizializzate')
    this.activatedRoute.params.subscribe((param: MyParams) => {
      this.http.get(`http://localhost:3000/news/${param.id}`).subscribe(res => {
        this.news = res;
      });
    });
    // ONLY ONE TIME!
    // const myParamSync = this.activatedRoute.snapshot.paramMap.get('id');
    // this.http.get(`http://localhost:3000/news/${myParamSync}`).subscribe(res => {
    //   this.news = res;
    // });
  }

}

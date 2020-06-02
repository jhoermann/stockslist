import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient,
  ) {}
  title = 'stockslist';
  ngOnInit() {
    let dbGet = this.http.get('http://localhost:3000/').subscribe(result => console.log(result))
  }
}

import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  products: any;

  constructor(private http: HttpClient) {}


getProducts() {
  this.products = this.http.get('http://localhost:3000/products/');
}

  ngOnInit(): void {
    this.products = this.http.get('http://localhost:3000/products/');
   }

}

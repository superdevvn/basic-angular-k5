import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  username: string;
  password: string;
  rememberMe: boolean;
  role: string;
  constructor() {

  }

  ngOnInit() {
  }
  click() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.rememberMe);
    console.log(this.role);
  }
}

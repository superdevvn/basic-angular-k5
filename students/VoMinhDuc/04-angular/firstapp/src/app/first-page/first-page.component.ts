import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  username: string;
  password: string;
  role: string;
  rememberMe: boolean;
  constructor() { 
    this.password = '123456';
  }

  ngOnInit() {
  }
  click(){
    console.log(this.username);
    console.log(this.password);
    console.log(this.role);
    console.log(this.rememberMe);
  }

}

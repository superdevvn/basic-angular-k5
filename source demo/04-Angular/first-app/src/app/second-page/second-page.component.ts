import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  username: string;
  password: string;
  constructor() { 
    this.username = "DarkPeter";
  }

  ngOnInit() {
  }
  click(){
    console.log(this.username);
    console.log(this.password);
  }
}

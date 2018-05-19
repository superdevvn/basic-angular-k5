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

  constructor() {
    this.username = "ADHUYNH"
   }
  click()
  {
  console.log(this.username);
  console.log(this.password);
  console.log(this.role)
  }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpn1',
  templateUrl: './cpn1.component.html',
  styleUrls: ['./cpn1.component.css']
})
export class Cpn1Component implements OnInit {
  firstname:string;
  lastname:string;
  username:string;
  city:string;
  email:string;
  nation:string;
  constructor() {
    this.username='chanh';
    this.firstname='Cu';
   }


  ngOnInit() {

}
submit(){
  console.log(this.nation);
}
}

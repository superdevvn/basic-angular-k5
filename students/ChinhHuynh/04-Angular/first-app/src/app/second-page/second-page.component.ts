import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor() {
    '@types/jquery'
   }

  ngOnInit() {
  }
  mouseeter(){
    $('#btnhover').toggleClass('btn-primary');
  }
  mouseleave(){
    $('#btnhover').toggleClass('btn-primary');
  }


}

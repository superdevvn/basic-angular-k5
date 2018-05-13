import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {\

  @ViewChild('btnHover') btnHover: ElementRef;

  constructor() { 
  }

  ngOnInit() {
  }
  mouseenter(){
    $(this.btnHover.nativeElement).toggleClass('btn-primary');
  }
  mouseleave(){
    $(this.btnHover.nativeElement).toggleClass('btn-primary');
  }
}

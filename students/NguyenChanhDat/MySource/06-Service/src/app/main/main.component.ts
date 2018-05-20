import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,private UtilityService:UtilityService) { }

  ngOnInit() {
    console.log(this.UtilityService.user);
    if(!this.UtilityService.user){
      this.router.navigate(['login']);
    }
  }

}

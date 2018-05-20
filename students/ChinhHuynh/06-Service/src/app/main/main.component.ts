import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private utilityServices: UtilityService) { }

  ngOnInit() {
    console.log(this.utilityServices.user)
    if(!this.utilityServices.user){
      this.router.navigate(['login'])
    }
  }

}

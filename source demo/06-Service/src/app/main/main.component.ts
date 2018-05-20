import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private utilityService: UtilityService) { }

  ngOnInit() {
    console.log(this.utilityService.user);
    if(!this.utilityService.user) {
      this.router.navigate(['login']);
    }
  }

}

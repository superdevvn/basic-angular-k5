import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private utilityService: UtilityService) {
     }

    
ngOnInit() {
  console.log(this.utilityService.example)
  this.utilityService.example = "Chinh"
}
login(){
  this.utilityService.user = {
    username: "abc",
    fullname: "ancd234rfdfrwetght",
    role: "abcd"
  }
  this.router.navigate(['main']);
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    console.log(this.utilityService.example);
    this.utilityService.example = "Đạt";
  }
  login() {
    this.utilityService.user = {
      username: "DarkPeter",
      fullName: "Trần Thuận Nghĩa",
      role: "Admin"
    };
    this.router.navigate(['main']);
  }
}

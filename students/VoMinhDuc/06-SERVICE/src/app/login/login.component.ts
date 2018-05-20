import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';
import * as $ from 'jquery';
import 'bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router,
    private utilityService: UtilityService,
    private apiService: ApiService) {
    
  }

  ngOnInit() {
    console.log(this.utilityService.example);
    this.utilityService.example = "DAT";
  }
  login() {
    this.utilityService.user = {
      username: "MDUCPTIT",
      fullName: "VO MINH DUC",
      role: "Admin"
    }
    this.apiService.post('http://103.232.121.69:5201/api/login',{
      username: this.username,
      password: this.password
    });
    // this.router.navigate(['main']);
  }

}

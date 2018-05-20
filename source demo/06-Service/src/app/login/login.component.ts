import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private apiService: ApiService,
    private utilityService: UtilityService) {

  }
  username: string;
  password: string;
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
    this.apiService.post('http://103.232.121.69:5201/api/login', {
      username: this.username,
      password: this.password
    });
    //camelCase
  }

  getUsers(){
    this.apiService.post('http://103.232.121.69:5201/api/getUsers', {});
  }
  // getCategories, getRoles, getBooks, getInOuts
}

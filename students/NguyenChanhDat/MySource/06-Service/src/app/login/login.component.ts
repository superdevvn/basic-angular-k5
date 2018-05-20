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
  username: string;
  password: string;
  constructor(private router: Router,
    private UtilityService: UtilityService,
    private ApiService: ApiService) {
  }
  ngOnInit() {
    console.log(this.UtilityService.example);
    this.UtilityService.example = "Dat";
  }
  login() {
    this.UtilityService.user = {
      username: "Darkpeter",
      fullname: "Nguyen Chanh Dat",
      role: 'admin'
    };
    this.ApiService.post('http://103.232.121.69:5201/api/login', {
      username: this.username,
      password: this.password
    });
    // this.router.navigate(['main']);
  }
  getUser(){
    this.ApiService.post('http://103.232.121.69:5201/api/getUsers', {

    });
  }
  getBooks(){
    this.ApiService.post('http://103.232.121.69:5201/api/getBooks', {

    });
  }
  getCategories(){
    this.ApiService.post('http://103.232.121.69:5201/api/getCategories', {

    });
  }
  getRoles(){
    this.ApiService.post('http://103.232.121.69:5201/api/getRoles', {

    });
  }
  getInOuts(){
    this.ApiService.post('http://103.232.121.69:5201/api/getInOuts', {

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';
import 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
    private apiServices: ApiService,
    private utilityService: UtilityService) {
  }
  username: string;
  password: string;
  ngOnInit() {
    console.log(this.utilityService.example)
    this.utilityService.example = "Chinh"
  }
  login() {
    this.utilityService.user = {
      username: "abc",
      fullname: "abcd",
      role: "abcd"
    };
    let user = {
      username: this.username,
      password: this.password
    };
     this.apiServices.post('http://103.232.121.69:5201/api/login', user);
  }
  getUsers(){
    this.apiServices.post('http://103.232.121.69:5201/api/getUsers',{})
  }
  getBooks(){
    this.apiServices.post('http://103.232.121.69:5201/api/getBooks',{})
  }
  getRoles(){
    this.apiServices.post('http://103.232.121.69:5201/api/getRoles',{})
  }
  getCategories(){
    this.apiServices.post('http://103.232.121.69:5201/api/getCategories',{})
  }
  getInouts(){
    this.apiServices.post('http://103.232.121.69:5201/api/getInOuts ',{})
  }
}

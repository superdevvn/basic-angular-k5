import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['main']);
  }

}

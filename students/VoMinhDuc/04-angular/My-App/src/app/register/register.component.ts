import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  yourname: string;
  birthday: Date;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  dauso: string;
  phonenumber: string;
  agreecheck: boolean;
  verify: string;
  constructor() { 

  }

  ngOnInit() {
  }

  Register(){
    if (this.yourname == '') this.yourname = 'MDUCPTIT';
    if (!this.birthday) this.birthday = new Date();
    if (this.city == '') this.city = 'NULL';
    if (this.state == '') this.state = 'NULL';
    if (this.zipcode == '') this.zipcode = 'NULL';
    if (this.email == '') this.email = 'NULL';
    if (this.dauso == '') this.dauso = '###-';
    if (this.phonenumber == '') this.phonenumber = '######';
    if (this.agreecheck) this.verify='The account is successfully verified!';
    else this.verify='The account was not successfully verified!';
    console.log(this.verify);
    console.log(this.yourname);
    console.log(this.birthday);
    console.log(this.city);
    console.log(this.state);
    console.log(this.zipcode);
    console.log(this.dauso + this.phonenumber);
    console.log(this.agreecheck);
  }

}

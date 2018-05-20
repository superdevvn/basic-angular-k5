import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: Http) { }
  //POST
  //url
  post(url: string, data: any) {
    this.http.post(url, data).toPromise().then(res => {
      console.log(res.json());
    }).catch(err => {
      console.log(err);
    });
  }
}

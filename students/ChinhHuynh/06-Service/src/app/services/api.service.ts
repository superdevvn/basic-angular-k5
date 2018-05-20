import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hppt: Http) { }

  post(url: string, data: any) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", "	T7g4AXn3TCQL77zI8QDi16sORDXScffXXgnQ/mE5P38CESS5LXagKECtX5xw0cD+")
    this.hppt.post(url, data, {headers}).toPromise().then(res => {
      console.log(res.json());
    }).catch(err => {
      console.log(err);
    });
  }

}

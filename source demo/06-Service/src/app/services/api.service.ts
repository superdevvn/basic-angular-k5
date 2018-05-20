import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  // POST
  // url, data
  post(url: string, data: any) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", "T7g4AXn3TCQL77zI8QDi16sORDXScffXXgnQ/mE5P38CESS5LXagKECtX5xw0cD+");
    this.http.post(url, data, { headers }).toPromise().then(res => {
      console.log(res.json());
    }).catch(err => {
      console.log(err);
    });
  }
}

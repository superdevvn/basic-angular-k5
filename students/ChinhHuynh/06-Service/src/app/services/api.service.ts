import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hppt: Http ) { }
}

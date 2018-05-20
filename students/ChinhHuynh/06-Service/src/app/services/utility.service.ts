import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  example: string;

  user:{
    username: string;
    fullname: string;
    role: string;
  }

  constructor() {

   }
}

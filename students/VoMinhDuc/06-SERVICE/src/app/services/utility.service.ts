import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  example: string;
  user: {
    username: string;
    fullName: string;
    role: string;
  }
  constructor() { 
    this.example="HELLO";
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  clickMe(name : string){
  alert(`Thanks For Registering for ${name} complete Course`)
  }

  constructor() { }
}

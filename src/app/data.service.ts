import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  sData="hello hi"
  constructor() { }

  smethod(){
    alert("service method")
  }
}

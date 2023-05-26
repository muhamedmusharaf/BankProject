import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  data="happy banking with us"
  pdata="enter acno"
  login(a:any){
    alert('login clicked')
  }
  acnoChange(event:any){
    console.log(event.target.value);
    
  }

}

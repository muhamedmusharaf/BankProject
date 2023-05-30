import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 acno:any
 uname:any
 psw1:any
 cpsw:any 
  signup(){
// var acno=this.acno
console.log(this.acno);
console.log(this.uname);
console.log(this.psw1);
console.log(this.cpsw);

 }
}

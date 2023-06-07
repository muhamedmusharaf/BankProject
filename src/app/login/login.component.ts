import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


// export class LoginComponent {
  data="happy banking with us"
  pdata="enter acno"

  serviceData:any

acno:any
psw:any



// home page call chayn
constructor(private rout:Router,private ds:DataService){}

  ngOnInit():void{
     
  }  


  login(){
    var acno=this.acno
    var psw=this.psw
    // this.rout.navigateByUrl('home')

    
    // console.log(this.acno);
    // console.log(this.psw);


    this.ds.login(acno,psw).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
    }
    )
  }

}

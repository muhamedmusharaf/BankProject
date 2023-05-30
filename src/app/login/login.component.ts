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

// home page call chayn
constructor(private rout:Router,private ds:DataService){}

  ngOnInit():void{
     this.serviceData=this.ds.sData
     console.log(this.serviceData);
     this.ds.smethod()
     
  }  


  login(){
    // console.log(a.value);
    
    // alert('login clicked')
    this.rout.navigateByUrl('home')
  }

}

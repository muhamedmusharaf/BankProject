import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno: any
  uname: any
  psw1: any
  cpsw: any


  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {

  }


  signup() {
    // var acno=this.acno
    var acno = this.acno
    var uname = this.uname
    var psw = this.psw1
    var cpsw = this.cpsw

    if (psw == cpsw) {
      this.ds.register(acno, uname, psw).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('')
      })
    }
    else {
      alert('password doesnt match')
    }

  }
}

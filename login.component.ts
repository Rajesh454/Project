import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  error:string;
  constructor(private ls : LoginService,private router:Router
    ) {
    this.user = new User('kshitij@gmail.com','kshitij');
    this.error='';
   }

  ngOnInit(): void {
  }
  login()
  {
    console.log(this.user);
    this.ls.loginUser(this.user)
    .subscribe(response=>{
      console.log(response);
      if(response.status===200)
      {
        localStorage.setItem('email',this.user.uemail);
        this.router.navigate(['/dashboard']);
      }
      else{
        //alert('Login failed');
        this.error='Please enter valid credentials or register'
      }
    });
  }
}

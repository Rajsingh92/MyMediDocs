import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    //if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/admin');
  }

  onSubmit(form : NgForm){
    // this.userService.login(form.value).subscribe(
    //   res => {
    //     this.userService.setToken(res['token']);
    //     this.router.navigateByUrl('/admin');
    //   },
    //   err => {
    //     this.serverErrorMessages = err.error.message;
    //   }
    // );
  }

}

import { Component ,OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  msg:any;
  result:any;
  constructor(
    private builder :FormBuilder, 
    private service : AdminService, 
    private router : Router
  ) {
      sessionStorage.clear();// it will delete all values form session memory
   }

  ngOnInit(): void {
  }

  loginForm = this.builder.group(
    {
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    });


    adminAccess(){
      if(this.loginForm.valid){
        this.service.GetUserByID(this.loginForm.value.email).subscribe(data=>{
          this.result=data;
          if(this.result.password==this.loginForm.value.password){
            sessionStorage.setItem("adminName",this.result.name);
            sessionStorage.setItem("id",this.result.id);
            this.router.navigate(['home']);
          }else
            this.msg="Invalid Password"
        },error=>{
          this.msg="Invalid UserName"
        });
      }else{
        this.msg="Please fill username/password";
      }
    }


}

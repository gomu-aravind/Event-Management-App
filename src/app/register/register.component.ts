import { Component,OnInit } from '@angular/core';
import{FormBuilder,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

constructor(
  private builder:FormBuilder,
  private service:AdminService,
  private router:Router
){}
ngOnInit(): void {
  
}
msg:string="";
registerForm=this.builder.group(
  {
    id:this.builder.control('',Validators.required),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  }
)

proceedRegister(){
  if(this.registerForm.valid){
    this.service.CreateNewUser(this.registerForm.value).subscribe(data=>{
      this.router.navigate(['login']);
    })
  }else{
    this.msg="Invalid Form";
  }
}

}

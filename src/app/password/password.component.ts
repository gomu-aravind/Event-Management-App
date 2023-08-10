import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import {FormBuilder, Validators} from '@angular/forms'
import { Admin } from '../admin';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  msg:string="";
  id:string="";
  admin:Admin={} as Admin;
  allAdmin:Admin[]=[];

  constructor(private service:AdminService,
    private builder:FormBuilder,
    private router:Router) { }


    ngOnInit(): void {
      const adminId=sessionStorage.getItem("id");
      if(adminId!=null){
        this.id=adminId;
      }
      this.service.GetAllAdmin().subscribe(data=>{
        this.allAdmin=data;
      })

      this.service.GetUserByID(this.id).subscribe(data=>{
        this.admin=data;
      })
    }


  passForm=this.builder.group(
    {
      newPassword: this.builder.control('', Validators.required),
      confirmPassword: this.builder.control('', Validators.required)
    });

  changePassword(){
    if(this.passForm.valid){
      if(this.passForm.value.newPassword==this.passForm.value.confirmPassword){
        if(this.passForm.value.newPassword!=null && this.passForm.value.newPassword!=undefined){
            this.admin.password=this.passForm.value.newPassword;
            this.service.UpdateAdmin(this.id,this.admin).subscribe(data=>{
              this.router.navigate(['home']);
            })
        }

      }else{
        this.msg="Password should be same";
      }
    }else{
      this.msg="Invalid Form"
    }
  }
}

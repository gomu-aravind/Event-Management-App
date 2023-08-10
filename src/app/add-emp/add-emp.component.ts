import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  constructor(private empServ:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }
  emp:Employee = {} as Employee; 
  msg:string = "";
  dummy:Employee[]=[];
  addNewEmployee(frm:any)
  {
      if(frm.valid)
      {
      this.empServ.newEmployee(this.emp).subscribe(data=>{
        //console.log(data);
        this.router.navigate(['employees']);
      });
    }
    else
      this.msg = "Invalid Form";
  }

  getCount(){
    this.empServ.GetAllEmployees().subscribe(data=>{
      this.dummy=data;
    })
    return this.dummy.length;
  }

}

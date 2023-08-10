import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit{

empAll:Employee[]=[];
first_name:any;
email:any;


constructor(private empServ:EmployeeService,private router:Router){
  this.showAllEmployees();
}

ngOnInit(): void {
  this.showAllEmployees();
}

showAllEmployees()
{
  this.empServ.GetAllEmployees().subscribe(data=>{
    this.empAll = data;
  });
}

getEmployee(id:number)
  {
    this.router.navigate(['view', id]);
  }



  Search()
  {
    if(this.email=="")
    {
      this.ngOnInit();
    }
    else
    {
      this.empAll = this.empAll.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email);
      });
    }
  }

}

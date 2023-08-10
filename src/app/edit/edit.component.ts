import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  searchid:number=0;
  id:any;
  emp:Employee={}as Employee;
constructor(private empServ:EmployeeService, private route:ActivatedRoute, 
  private router:Router){}

  ngOnInit(): void {
    this.showEmpInfo();
  }

  showEmpInfo()
  {
    this.id = this.route.snapshot.params['id']; 
    this.empServ.SearchEmp(this.id).subscribe(data=>{
      // console.log(data);
      this.emp = data;
    });  
  }

  UpdateEmployeeInfo()
  {
    this.empServ.UpdateEmp(this.id, this.emp).subscribe(data=>{
      this.router.navigate(['employees']);
    })
  }

}

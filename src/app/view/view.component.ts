import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{


  constructor(private empServ:EmployeeService,private route:ActivatedRoute,private router:Router){}
  
  searchid:number=0;
  id:any;
  emp:Employee={}as Employee;

  ngOnInit(): void {
    this.showEmpInfo();
  }

  showEmpInfo()
    {
      this.searchid = this.route.snapshot.params['id'];
      this.empServ.SearchEmp(this.searchid).subscribe(data=>{
        //console.log(data);
        this.emp = data;
      });  
    }


    DeleteEmployeeInfo(id:number)
  {
    const confirmDelete = confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
    this.empServ.DeleteEmp(id).subscribe(data=>{
      this.router.navigate(['employees']);
    });
  }
  }

  UpdateEmpInfo(id:number)
  {
    this.router.navigate(['edit', id]);
  }


}

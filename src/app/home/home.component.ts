import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:string="";
  constructor(){
    const adminName=sessionStorage.getItem("adminName");
    if(adminName!=null){
      this.name=adminName;
    }
  }
}

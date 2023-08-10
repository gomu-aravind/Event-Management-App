import { Component ,DoCheck} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventMngApp';

  navBarVisibility=true;
  constructor(private router:Router){}

  ngDoCheck():void
  {
      let currentUrl = this.router.url;
      
      if(currentUrl=="/login" || currentUrl=="/register"  || currentUrl=="/")
      {
        this.navBarVisibility = false;
      }
      else
      {
        this.navBarVisibility =true;
      }
  }

logOut(){
  this.router.navigate(['login']);
}

}

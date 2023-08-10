import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class ManageGuard implements CanActivate {
  constructor(private router:Router, private service:AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if(this.service.CheckLoginUser()==true)
    {
      //console.log(this.service.CheckLoginUser());
      if(this.router.url.length>0)
      {
        let urlmap = route.url[0].path;
        //console.log(urlmap);
        if(urlmap=="home" || urlmap=="view" || urlmap=="edit" || urlmap=="add" || urlmap=="employees" ||urlmap=="password")
          return true;
      }
    }
    else
    {
      alert("First User has to Login");
      this.router.navigate(['login']);
      return false;
    }
    return false;
    
    
      
  }
  
}

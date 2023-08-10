import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl="http://localhost:3000/admins";


  CreateNewUser(userdata:any)
  {
    return this.httpClient.post(this.apiUrl, userdata);
  }

  GetAllAdmin() :Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.apiUrl);
  }

  GetUserByID(adminId:any)
  {
    return this.httpClient.get<Admin>(this.apiUrl + '/' + adminId);
  }

  CheckLoginUser()
  {
    return sessionStorage.getItem('adminName')!=null;
  }

  getLoginUser()
  {
    return sessionStorage.getItem('adminName');
  }

  UpdateAdmin(id:string, admin:Admin) : Observable<Object>{
    return this.httpClient.put(`${this.apiUrl}/${id}`, admin);
  }

}

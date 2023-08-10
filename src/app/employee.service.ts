import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl="http://localhost:3000/employees";

  GetAllEmployees() :Observable<Employee[]>
{
  return this.httpClient.get<Employee[]>(`${this.apiUrl}`);
}

newEmployee(employee:Employee):Observable<Object>{
  return this.httpClient.post(`${this.apiUrl}`, employee);
}

SearchEmp(id:number) : Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.apiUrl}/${id}`);
}

DeleteEmp(id:number) : Observable<Object>{
  return this.httpClient.delete(`${this.apiUrl}/${id}`);
}

UpdateEmp(id:number, emp:Employee) : Observable<Object>{
  return this.httpClient.put(`${this.apiUrl}/${id}`, emp);
}
}

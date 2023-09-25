import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8080/employee';

// async getAllEmployees(): Promise<Employee[]> {
//   const data = await fetch(this.url);
//   return await data.json() ?? [];
// }

constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/all`);
  }

  public addEmployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/add`, employee);
  }

  public updateEmployee(employee:Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/update`, employee);
  }

  public deleteEmployee(employeeId:number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${employeeId}`);
  }
}

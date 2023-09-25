import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public employees: Employee[] = [];
  // employeeService: EmployeeService = inject(EmployeeService);
  constructor(private employeeService:EmployeeService){}

  // constructor(private employeeService:EmployeeService){} *** this way also we can inject the employee servcie.
  ngOnInit() {
      this.getEmployees();
  }

  public getEmployees():void {
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) => {
        this.employees  = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
}

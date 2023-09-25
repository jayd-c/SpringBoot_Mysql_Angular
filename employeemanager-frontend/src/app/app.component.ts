import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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
  public onAddEmployee(addForm: NgForm):void {
    document.getElementById('add-employee-form')?.click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response:Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
      
    );
  }
  


  onOpenModal(employee: any, mode: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add') {
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit') {
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete' ) {
      button.setAttribute('data-target', '#deleteEmployeeModal')
    }
    container?.appendChild(button);
    button.click();
  }
  
}

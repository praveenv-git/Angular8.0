import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import {EmployeeService} from '../employee.service'
@NgModule({
  declarations: [EmployeeComponent, DepartmentComponent],
  imports: [
    CommonModule
  ],
  exports: [ EmployeeComponent, DepartmentComponent ],
  providers:[ EmployeeService ]
})
export class AdminModule { }

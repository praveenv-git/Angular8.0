import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {

    

   }

  ngOnInit(): void {
    var empDet= this.employeeService.getEmployeeDetails();
  }

}

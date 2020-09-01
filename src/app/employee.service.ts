import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
getEmployeeDetails():any[]
{
 var employeeDetails = [
   { employeeId:1, Name:"Praveen", Address:"Chennai" },
   { employeeId:2, Name:"Prakash", Address:"Hyderabad" },
   { employeeId:2, Name:"Prabhkar", Address:"Vizag" },
 ];
 return employeeDetails;

}
  
}

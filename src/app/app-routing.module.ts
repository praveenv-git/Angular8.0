import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import {EmployeeComponent} from './admin/employee/employee.component';
import {DepartmentComponent } from './admin/department/department.component';


const routes: Routes = [
 { path:"dashboard" , component: DashboardComponent },
 { path:"about", component:AboutComponent },
 { path:"employee", component:EmployeeComponent },
 { path:"department", component:DepartmentComponent },
 {path:"", redirectTo: "dashboard", pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

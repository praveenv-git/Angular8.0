import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  Designation :string;
  UserName :string;
  NoOfItTeamMembers :number;
  TotalCostofAllproject:number;
 PendingTasks:number;
 UpcomingProjects:number;
 AvilableUnits:number;
 Clients:string[];
 TeamMumberSummery =[];

  ngOnInit(): void {
    this.Designation="Team Lead";
    this.UserName= "Praveen";
    this.NoOfItTeamMembers =10;
    this.TotalCostofAllproject =34343;
    this.PendingTasks= 34;
    this.UpcomingProjects =23;
    this.AvilableUnits =3;
    this.Clients = ["Hexaware","ABB", "TCS","HCL"];
    this.TeamMumberSummery = [
    {region:"EST", TeammberCount :40}, 
    {region:"WST",  TeammberCount:20},
    {region:"ST", TeammberCount:50},
    {region:"NORTH", TeammberCount:300}
    ];
  }
  // called interpolation binding
   onProjectChange($event)
   {
    console.log($event.target.innerHTML);
    if($event.target.innerHTML =="project2")
    {
      this.AvilableUnits =44;

    }

   }
}

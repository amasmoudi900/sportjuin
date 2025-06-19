import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  actualDate!:Date;
  title:string="Dashboard";
  adminTitle: string= "Admin dashboard";
  constructor() { }

  ngOnInit(): void {
    this.actualDate =new Date();
  }

}

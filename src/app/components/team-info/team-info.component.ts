import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
title:string="team"
teamId:any;
teams:any=[]
foundTeam:any={}
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
   
    this.foundTeam = this.teams.find(
      (obj: any) => { return obj.id == this.teamId ; }
    )
    console.log("foundTeam", this.foundTeam);
  }

}

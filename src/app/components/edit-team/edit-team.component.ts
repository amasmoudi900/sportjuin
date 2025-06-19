import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
title:string="edit team"
editTeamForm!:FormGroup
team:any={}
teams:any=[]
teamId:any
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.paramMap.get("id");
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.team = this.teams.find(
      (obj: any) => { return obj.id == this.teamId }
    )
  }
  editTeam(){
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teamId == this.teams[i].id) {
        this.teams[i] = this.team;
        break;
      }
    }
    localStorage.setItem("teams", JSON.stringify(this.teams));
    this.router.navigate(["admin"]);
  }

}

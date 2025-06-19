import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams: any = [];
  path!: string;
  isDisplayed: boolean = false;
  searchTeamForm!: FormGroup;
  team: any = {};

  constructor(private router: Router, private tService: TeamService) { }

  ngOnInit(): void {
    // this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.tService.getAllTeams().subscribe(
      (data) => {
        console.log("Here data from BE", data);
        this.teams = data.T;
      }
    );
    this.path = this.router.url;
    console.log("path", this.path);
    if (this.path == "/admin") {
      this.isDisplayed = true;
    }

  }
  searchTeam() {
    let foundTeams = [];
    let stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
    let foundStadium = stadiums.find(
      (obj: any) => { return obj.name == this.team.stadium }
    )
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    foundTeams = this.teams.filter(
      (objs: any) => { return objs.stadiumId == foundStadium.id }
    )
    this.teams = foundTeams;
  }
  goToDisplayTeam(id: number) {
    this.router.navigate([`teamInfo/${id}`])
  }
  goToEditTeam(id: any) {
    this.router.navigate([`editTeam/${id}`]);
  }
  deleteTeam(id: any) {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == id) {
        this.teams.splice(i, 1);
        break;
      }

    }
    localStorage.setItem("teams", JSON.stringify(this.teams))
  }

}

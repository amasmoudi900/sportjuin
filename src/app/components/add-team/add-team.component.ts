import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm!: FormGroup;
  team: any = {};
  stadiums: any = []
  constructor(
    private tService: TeamService,
    private router: Router,
    private sService: StadiumService
  ) { }

  ngOnInit(): void {
    this.sService.getAllStadiums().subscribe(
      (data: any) => {
        this.stadiums = data.stadiumsTab;
      }
    )
  }
  addTeam() {
    console.log("here is team obj", this.team);
    this.tService.addTeam(this.team).subscribe(
      (data) => {
        console.log("Here data from BE", data.msg);
        this.router.navigate(['admin']);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = {};
  teams: any = [];
  constructor(
    private tService: TeamService,
    private pService: PlayerService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((data: any) => {
      this.teams = data.T;
    });
  }
  addPlayer() {
    console.log("here is player obj", this.player);
    // {name:.., age:..., number :..., position:..., teamId : La valeur de l'_id du team selectionné}
    this.pService.addPlayer(this.player).subscribe();
  }


}

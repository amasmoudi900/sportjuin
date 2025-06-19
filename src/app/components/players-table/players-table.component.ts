import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any = [];
  constructor(private router: Router, private pService: PlayerService) { }

  ngOnInit(): void {
    this.pService.getAllPlayers().subscribe(
      (response: any) => {
        console.log("Here response from BE", response.players);
        this.players = response.players;
      }
    )
  }
  goToDisplayPlayer(id: number) {
    this.router.navigate([`playerInfo/${id}`]);
  }
  goToEditPlayer(id: any) {
    this.router.navigate([`editPlayer/${id}`]);
  }
  deletePlayer(id: number) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == id) {
        this.players.splice(i, 1);
        break;
      }

    }
    localStorage.setItem("players", JSON.stringify(this.players))
  }

}

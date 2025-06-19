import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  title:string="edit player"
  editPlayerForm!:FormGroup;
  player:any={}
  playerId:any;
  players:any=[]
  constructor(private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.paramMap.get("id");
    this.players = JSON.parse(localStorage.getItem("players") || "[]");
    this.player = this.players.find(
      (obj: any) => { return obj.id == this.playerId }
    )
  }
  editPlayer() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.playerId == this.players[i].id) {
        this.players[i] = this.player;
        break;
      }
    }
    localStorage.setItem("players", JSON.stringify(this.players));
    this.router.navigate(["admin"]);
  }

}

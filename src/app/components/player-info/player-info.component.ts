import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  foundPlayer:any={};
  playerId:any;
  players:any=[]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.players = JSON.parse(localStorage.getItem("players") || "[]");
   
    this.foundPlayer = this.players.find(
      (obj: any) => { return obj.id == this.playerId ; }
    )
    console.log("foundMatch", this.foundPlayer);
  }

}

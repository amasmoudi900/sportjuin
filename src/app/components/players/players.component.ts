import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any=[];
  constructor() { }

  ngOnInit(): void {
    this.players=JSON.parse(localStorage.getItem("players")||"[]");
    
  }

}

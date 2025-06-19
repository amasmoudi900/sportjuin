import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl: string = "http://localhost:3000/api/players";
  constructor(private httpClient: HttpClient) { }
  // récupérer tous les players [{},{}]
  getAllPlayers() {
    return this.httpClient.get<{ players: any }>(this.playerUrl);
  }

  getPlayerById(id: number) {
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }

  deletePlayer(id: number) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }

  updatePlayer(newPlayer: any) {
    return this.httpClient.put(this.playerUrl, newPlayer);
  }
  addPlayer(player: any) {
    return this.httpClient.post<{ msg: string }>(this.playerUrl, player);
  }


}

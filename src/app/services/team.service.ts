import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "http://localhost:3000/api/teams"
  constructor(private httpClient: HttpClient) { }

  getAllTeams() {
    return this.httpClient.get<{ T: any }>(this.teamUrl);
  }

  getTeamById(id: number) {
    return this.httpClient.get(`${this.teamUrl}/${id}`);
  }

  deleteTeam(id: number) {
    return this.httpClient.delete(`${this.teamUrl}/${id}`);
  }
  updateTeam(newTeam: any) {
    return this.httpClient.put(this.teamUrl, newTeam);
  }

  addTeam(team: any) {
    return this.httpClient.post<{ msg: string }>(this.teamUrl, team);
  }
}

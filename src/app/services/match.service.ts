import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = "http://localhost:3000/api/matches"
  // httpClient: livreur
  constructor(private httpClient: HttpClient) { }
  // récupérer tous les matchs
  // réponse [{},{},{}]
  getAllMatches() {
    return this.httpClient.get<{ tab: any, nbr: number, status: string }>(this.matchUrl);
  }

  // récupérer un match par son id
  // réponse: {}, msg
  getMatchById(id: number) {
    return this.httpClient.get<{ msg: string, match: any }>(`${this.matchUrl}/${id}`);
  }
  // supprimer un match du tableau matches
  // reponse: msj
  deleteMatchById(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.matchUrl}/${id}`);
  }

  // update match
  // msj
  updateMatch(newMatch: any) {
    return this.httpClient.put<{ msg: string }>(this.matchUrl, newMatch);
  }
  // addMatch
  // msj
  addMatch(match: any) {
    return this.httpClient.post<{ msg: string }>(this.matchUrl, match);
  }
  searchMatchesByScoerOne(scoreOne: number) {
    return this.httpClient.get(`${this.matchUrl}/search/${scoreOne}`);
  }

  // obj = {scoreOne : 0, scoreTwo:1}
  searchMatchesByScores(obj: any) {
    return this.httpClient.post<{ T: any }>(this.matchUrl + "/search", obj);
    // return this.httpClient.post(`${this.matchUrl}/search`, obj);
  }
}

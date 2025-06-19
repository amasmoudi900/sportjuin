import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumURL: string = "http://localhost:3000/api/stadiums";
  constructor(private http: HttpClient) { }

  addStadium(obj: any) {
    return this.http.post<{ msg: string }>(this.stadiumURL, obj);
  }
  getAllStadiums() {
    return this.http.get<{ stadiumsTab: any }>(this.stadiumURL);
  }
}

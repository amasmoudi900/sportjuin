import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  foundMatch: any = {};
  matchId: any;
  matches: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        console.log("Here data from BE", data);
        if (data.match) {
          this.foundMatch = data.match;
        }
      }
    );

    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]");
    // // for (let i = 0; i < this.matches.length; i++) {
    // //   if (this.matches[i].id ==this.matchId) {
    // //     this.foundMatch=this.matches[i];
    // //     break;
    // //   }

    // // }
    // this.foundMatch = this.matches.find(
    //   (obj: any) => { return obj.id == this.matchId ; }
    // )
    // console.log("foundMatch", this.foundMatch);



  }

}

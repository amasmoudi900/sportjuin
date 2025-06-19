import { Component, OnInit } from '@angular/core';
import { Router, RouterFeature } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  term!: string;
  constructor(private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data: any) => {
        this.matches = data.tab;
      }
    );
  }

  updateMatches(T: any) {
    this.matches = T;
  }

}

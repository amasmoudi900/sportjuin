import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  title: string = "Edit match";
  editMatchForm!: FormGroup;
  match: any = {};
  matchId: any;
  matches: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matchService: MatchService

  ) { }

  ngOnInit(): void {
    this.matchId = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.matchId).subscribe(
      (response) => {
        console.log("Here response from BE", response);
        if (response.match) {
          this.match = response.match;
        }
      }
    )
  }

  editMatch() {
    this.matchService.updateMatch(this.match).subscribe(
      (response) => {
        console.log("Here response after edit", response);
        if (response.msg == "ok") {
          this.router.navigate(["admin"]);
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit(): void {
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]");
    this.getAllMatches();
  }

  goToDisplay(id: any) {

    this.router.navigate([`matchInfo/${id}`]);
  }

  goToEdit(id: any) {
    this.router.navigate([`editMatch/${id}`]);
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatchById(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        if (response.msg == "ok") {
          // Auto refresh
          this.getAllMatches();
        }
      }
    );
  }
  getAllMatches() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log("Here data from BE", data.tab);
        this.matches = data.tab;
      }
    );
  }

}

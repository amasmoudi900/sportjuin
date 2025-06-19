import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};
  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
  }

  addMatch() {
    console.log("here is add match", this.match);
    this.matchService.addMatch(this.match).subscribe(
      (response) => {
        console.log("Here response after adding match", response);
        this.router.navigate(['admin']);
      }
    );

  }
  generateId(T: any) {
    let max;
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 1; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }

      }
    }
    return max + 1;
  }

}

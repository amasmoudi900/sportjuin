import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() m: any;
  @Output() matchesOutput: EventEmitter<any> = new EventEmitter();

  path!: string;
  constructor(
    private mService: MatchService, 
    private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url;
  }
  teamResult(a: number, b: number) {
    if (a > b) {
      return 'green';
    } else if (a < b) {
      return 'red';
    }
    else {
      return 'blue';
    }
  }

  deleteMatch(x: any) {
    this.mService.deleteMatchById(x).subscribe(
      (response) => {
        if (response.msg == "ok") {
          this.mService.getAllMatches().subscribe(
            (data) => {
              this.matchesOutput.emit(data.tab);
            }
          );
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
  stadiums: any = [];
  isDisplayed: boolean = false;
  path!: string;
  constructor(private router: Router, private sService: StadiumService) { }

  ngOnInit(): void {
    this.sService.getAllStadiums().subscribe(
      (data) => {
        this.stadiums = data.stadiumsTab;
      }
    );
    this.path = this.router.url;
    if (this.path == "/admin") {
      this.isDisplayed = true;
    }
  }

}

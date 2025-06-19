import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
title:string="search match";
searchMatchForm!:FormGroup;
team:any={};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchMatch(){
    console.log("here is team obj", this.team);
    localStorage.setItem("matchToSearch", JSON.stringify(this.team));
    this.router.navigate(["search/matches"]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match:any={id:5,teamOne:"FCB",teamTwo:"RMD",scoreOne:3,scoreTwo:0}
  constructor() { }

  ngOnInit(): void {
  }

}

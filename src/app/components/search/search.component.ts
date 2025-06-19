import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  searchResults: any = [];
  errorMsg!: string;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', Validators.required],
      scoreTwo: ['', Validators.required]
    })
  }

  search() {
    console.log("Here object", this.searchForm.value);
    this.searchResults = [];
    this.matchService.searchMatchesByScores(this.searchForm.value).subscribe(
      (data) => {
        console.log("Here search response from BE", data);
        if (data.T.length > 0) {
          this.searchResults = data.T;
        } else {
          this.errorMsg = "No Matches Found !!";
        }
      }
    );
  }

}

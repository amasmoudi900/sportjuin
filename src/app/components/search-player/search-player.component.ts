import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {
  searchPlayerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchPlayerForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      team:['',[Validators.required]]
    })
  }
  search(){
    console.log("here is player to search",this.searchPlayerForm.value );
    localStorage.setItem("playerToSearch", JSON.stringify(this.searchPlayerForm.value))
  }

}

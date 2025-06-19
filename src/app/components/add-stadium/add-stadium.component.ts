import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  addStadiumForm!: FormGroup;
  title: string = "add stadium";
  constructor(
    private formBuilder: FormBuilder,
    private stadiumService: StadiumService,
    private router: Router) { }

  ngOnInit(): void {
    this.addStadiumForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      capacity: [''],
      country: ['']
    })
  }
  addStadium() {
    console.log("here is stadium obj", this.addStadiumForm.value);
    this.stadiumService.addStadium(this.addStadiumForm.value).subscribe(
      (data) => {
        console.log("Here data after saving stadium", data.msg);
        this.router.navigate(['admin']);
      }
    );
  }


}

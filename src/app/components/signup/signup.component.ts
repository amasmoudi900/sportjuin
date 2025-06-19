import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  title: string = "Signup";
  errorMsg!: string;
  path!: string;
  file: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {

    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&])[A-Za-z\\d$@!%*?&]{5,10}$')]],
      tel: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]]
    })
  }

  signup() {

    this.signupForm.value.role = (this.path == "/signup") ? "user" : "admin";
    this.signupForm.value.status = (this.path == "/signup") ? false : true;
    this.userService.signup(this.signupForm.value, this.file).subscribe(
      (response) => {
        // response.msg : User already Exist ou User not saved ! ou User created with success
        if (response.msg == "2") {
          this.router.navigate(['login']);
        } else {
          this.errorMsg = response.msg;
        }
      }
    );
  }
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
    }
  }

}

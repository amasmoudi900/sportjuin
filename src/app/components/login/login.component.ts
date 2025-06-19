import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  obj: any = {};
  title: string = "Login";
  errorMsg!: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log("here is login clicked", this.obj);
    this.userService.login(this.obj).subscribe(
      (response) => {
        console.log("response.msg ==", response);
        if (response.msg == "Welcome") {
          sessionStorage.setItem("token", response.user);
          let decodedObj: any = jwtDecode(response.user);
          console.log("Here decoded object", decodedObj);
          
            if (decodedObj.role == "user") {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['admin']);
            }

        } else {
          this.errorMsg = "Please check email/pwd";
        }
      }
    );
  }

}

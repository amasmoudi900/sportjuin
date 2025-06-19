import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        console.log("Here users from BE", data.usersTab);
        this.users = data.usersTab;
      }
    );
  }

  validate(id: any) {
    this.userService.updateStatus(id).subscribe();
  }

}

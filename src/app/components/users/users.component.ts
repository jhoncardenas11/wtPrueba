import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  usersList: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getUSers().subscribe((data) => {
      this.usersList = data;
      console.log(this.usersList);
    });
  }

}

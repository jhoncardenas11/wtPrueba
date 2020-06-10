import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.sass']
})
export class UserViewComponent implements OnInit {

  userInfo: any;
  userId: number;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.userId = parseInt(id, 10);
    
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.usersService.getUserById(this.userId).subscribe((data) => {
      this.userInfo = data;
      console.log(data);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users;

  constructor(private userService: UserService) { }

  ngOnInit() {
    return this.userService.getUsers()
      .subscribe(
        (users: User[]) => {
            this.users = users;
          } 
        );
  }

  //optimistic update
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if(confirm('Are you sure you want to delete ' + user.name + '?')) {
      //remove the user from the users array
      this.users.splice(index, 1);
      //call the server to delete the user 
      this.userService.deleteUser(user)
         .subscribe(//null,
        //   error => {
        //     alert('Could not delete the user.');
        //     this.users.splice(index, 0, user);
        //   }
        )
    }
  }

}

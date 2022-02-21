import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_laboratorio1';
  public users: Array<any> = []

  constructor(private userService: UsersService){
    this.userService.getUsers().subscribe((resp:any) => {
      console.log(resp)
      this.users = resp
    })

  }

}

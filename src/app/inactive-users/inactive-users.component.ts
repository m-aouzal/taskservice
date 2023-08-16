import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServicesService } from '../Services/user.services.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private userService: UserServicesService) {}

  users = this.userService.inactiveUsers;
 
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}

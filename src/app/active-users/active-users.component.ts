import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServicesService } from '../Services/user.services.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private userService:UserServicesService) {}

  users = this.userService.activeUsers$;
  
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);  
  }
}

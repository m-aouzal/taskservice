import { Injectable,EventEmitter } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeUsers$ = of(this.activeUsers);
  inactiveUsers$ = of(this.inactiveUsers);

  counter:number = 0;

  counterChange = new EventEmitter<number>

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterChange.emit(++this.counter);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterChange.emit(++this.counter);
  }
}

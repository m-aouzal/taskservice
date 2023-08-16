import { Component, Input } from '@angular/core';
import { UserServicesService } from '../Services/user.services.service';

@Component({
  selector: 'app-counter',
  template: `
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Counter</h5>
            <p class="card-text">Number of Changes: {{ count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {
  
  constructor(private userService:UserServicesService){}

  count:number = 0;
  ngOnInit():void {
    this.userService.counterChange.subscribe((data:number) => this.count = data);
  }

 
}

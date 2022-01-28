import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0;

  updateCount(value: number): void {
    console.log('VALUE', value);
    this.count = value;
  }
}

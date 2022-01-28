import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html'
})
export class NotificationsButtonComponent implements OnInit {

  constructor() { }

  @Input() notification: number;

  ngOnInit(): void {
  }

}

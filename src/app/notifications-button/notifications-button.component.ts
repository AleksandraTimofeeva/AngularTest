import { Component, OnInit, Input } from '@angular/core';
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html'
})
export class NotificationsButtonComponent implements OnInit {

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {}

  getNotification() {
    this.notification.getNotificationCount()
  }
}

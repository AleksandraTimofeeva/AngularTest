import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotificationService } from "../notification.service";
import {pluck} from "rxjs/operators";
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {

  addButton = document.getElementById('add');
  addButtonObs$: Observable = fromEvent(this.addButton, 'click')

  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.notification.getNotificationCount()
  }

  getNotification() {
    this.notification.getNotificationCount()
      .pipe(pluck('target', 'value'))
      .subscribe()
  }

  addNotification() {
    this.addButtonObs$ = this.notification.addNotification();
  }

  removeNotification() {
    this.notification.removeNotification();
  }

  resetCount() {
    this.notification.resetCount();
  }
}

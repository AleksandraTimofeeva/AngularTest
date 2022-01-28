import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {

  constructor() { }

  @Input('notification') notificationsCount: number;
  @Output() countChange = new EventEmitter<number>();

  ngOnInit(): void {
  }

  addNotification() {
    this.notificationsCount++;
    this.countChange.emit(this.notificationsCount);
  }

  removeNotification() {
    if (this.notificationsCount == 0) {
      return;
    }
    this.notificationsCount--;
    this.countChange.emit(this.notificationsCount);
  }

  resetCount() {
    this.notificationsCount = 0;
    this.countChange.emit(0);
  }

}

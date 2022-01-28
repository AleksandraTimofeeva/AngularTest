import {Injectable} from '@angular/core';
import {BehaviorSubject, merge} from "rxjs";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationsCount = new BehaviorSubject<number>(0);
  notificationCount$ = this.notificationsCount.asObservable();

  constructor() { }

  getNotificationCount(){
    return this.notificationCount$
  }

  addNotification() {
     return this.notificationCount$.subscribe()
  }

  removeNotification() {
    // if (this.notificationsCount == 0) {
    //   return;
    // }
    // this.notificationsCount--;
  }

  resetCount() {
    // this.notificationsCount = 0;
  }
}

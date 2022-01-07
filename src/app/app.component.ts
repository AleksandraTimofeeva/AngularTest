import { Component, OnInit } from '@angular/core';
import {asyncScheduler, fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, pluck, tap, throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'learn-angular';

  ngOnInit(): void {
    const throttleConfig = {
      leading: false,
      trailing: true
    }

    const click$ = fromEvent(document, 'click');

    click$.
    pipe(
      throttleTime(2000, asyncScheduler, throttleConfig)
    ).subscribe(console.log)
  }
}

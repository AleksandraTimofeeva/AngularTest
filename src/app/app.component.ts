import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, timer} from "rxjs";
import {mapTo, scan, takeUntil, takeWhile, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'learn-angular';

  ngOnInit(): void {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const input = document.getElementById('input');

    const startClick$ = fromEvent(startBtn, 'click');
    const stopClick$ = fromEvent(stopBtn, 'click');

    const counter$ = interval(100);
    const timer$ = timer(10, 1000);

    startClick$.subscribe(() => {
      timer$.pipe(
        mapTo(-1),
        scan((acc, crr) => acc + crr, 10),
        takeUntil(stopClick$),
        takeWhile(value => value >= -1),
        tap(console.log)
      ).subscribe((value => {
        if (value >= 0) {
          input.innerHTML = value.toString();
        } else {
          input.innerHTML = 'Los!';
        }
      }));
    })}
}

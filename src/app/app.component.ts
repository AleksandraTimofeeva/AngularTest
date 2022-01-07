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
    const inputBox = document.getElementById('input');
    const resultBox = document.getElementById('result');

    // defaultThottleConfig = { leading: true, trailing: false }
    const throttleConfig = {
      leading: false,
      trailing: true
    }

    const input$ = fromEvent(inputBox, 'keyup');

    input$.
      pipe(
        throttleTime(4000, asyncScheduler,  throttleConfig),
        pluck('target', 'value'),
        distinctUntilChanged(),
        tap(console.log)
      ).subscribe(value => resultBox.innerHTML = value.toString())
  }
}

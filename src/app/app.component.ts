import { Component, OnInit } from '@angular/core';
import {fromEvent } from "rxjs";
import {debounceTime, distinctUntilChanged, pluck, tap} from "rxjs/operators";

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

    const input$ = fromEvent(inputBox, 'keyup');

    input$.
      pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged(),
        tap(console.log)
      ).subscribe(value => resultBox.innerHTML = value.toString())
  }
}

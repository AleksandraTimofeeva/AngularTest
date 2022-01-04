import { Component, OnInit} from '@angular/core';
import {Subscription, of, fromEvent, merge} from "rxjs";
import {map, switchMap, takeUntil, skipUntil, distinctUntilChanged, debounceTime, mergeAll} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'learn-angular';

  ngOnInit(): void {
    const search: HTMLElement = document.getElementById('search');
    const content: HTMLElement = document.getElementById('content');

    const KEY = 'a8ddda7d272461c6917529bfeb3c0f9b';
    const BASE_URL = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=';

    const obs$ = fromEvent(search, 'keyup');
    obs$
      .pipe(
        debounceTime(1000),
        map(e => {
          const value = e.target['value'];
          return ajax.getJSON(`${BASE_URL}${value}`)
        }),
        distinctUntilChanged(),
        mergeAll(),
        map(res=> res['query']['search'])
      )
      .subscribe(console.log);


    // const dragElement = document.getElementById('drag-element');
    //
    // const mouseDown$ = fromEvent(dragElement, 'mousedown');
    // const mouseMove$ = fromEvent(dragElement, 'mousemove');
    // const mouseUp$ = fromEvent(dragElement, 'mouseup');
    //
    // const mouseDragging$ = mouseMove$.pipe(
    //   skipUntil(mouseDown$),
    //   takeUntil(mouseUp$)
    // );
    //
    // //
    // const mapToBoolean = (bool) => map(() => bool);
    //
    // //universal drag event will emit true on drag (desktop/mobile) optional:add touchStart$ to the merge.
    // const move$ = merge(mouseDragging$, mouseMove$).pipe(mapToBoolean(true);
    //
    // //universal end of drag event will emit false on drag end (desktop/mobile)
    // const end$ = merge(mouseUp$, mouseDown$).pipe(mapToBoolean(false);
    //
    // //merged to return true or false depending on user dragg
    // return merge(move$, end$).pipe(distinctUntilChanged());
  }
}

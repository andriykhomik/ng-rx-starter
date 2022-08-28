import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clear,
  countSelector,
  decrease,
  increase,
  updatedAtSelector,
} from './reducers/counter';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number> = this.store.select(countSelector);
  public updatedAt$: Observable<number | undefined> =
    this.store.select(updatedAtSelector);
  public countDecrease$: Observable<boolean> = this.count$.pipe(
    map((count) => count <= 0)
  );

  constructor(private store: Store) {}

  public increase(): void {
    this.store.dispatch(increase());
  }

  public decrease(): void {
    this.store.dispatch(decrease());
  }

  public clear(): void {
    this.store.dispatch(clear());
  }
}

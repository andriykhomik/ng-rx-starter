import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, Observable } from 'rxjs';
import { changeUpdatedAt, clear, decrease, increase } from './reducers/counter';

@Injectable()
export class AppEffects {
  private updatedAt$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    )
  );
  constructor(private actions$: Actions) {}
}

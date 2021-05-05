import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError, tap, switchMap } from "rxjs/operators";
import { VehicleService } from "../vehicle.service";
import { LOAD_MAKES, LOAD_MAKES_FAIL, LOAD_MAKES_SUCCESS, LOAD_YEARS, SET_YEARS, LOAD_MODELS, LOAD_MODELS_FAIL, LOAD_MODELS_SUCCESS } from "../actions";

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}

  loadYears$ = createEffect(() =>
    this.actions$.pipe(
      // tap(v => console.log("Inside effect :: ", JSON.stringify(v))),
      ofType(LOAD_YEARS),
      // tap(v => console.log("I am here")),
      switchMap(() =>
        this.vehicleService.getYears().pipe(
          map(response => response?.year ?? []),
          map(years => ({
            type: SET_YEARS,
            payload: years
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_MAKES),
      switchMap((year) =>
      this.vehicleService.getMakes(year).pipe(
        map(response => response?.make ?? []),
        map(makes => ({
          type: LOAD_MAKES_SUCCESS,
          payload: makes
        })),
        catchError(() => EMPTY)
       )
      )
    )
  );

  loadModels$ = createEffect(() => 
    this.actions$.pipe(
      ofType(LOAD_MODELS),
      switchMap(({year, make}) => {
        console.log("year, make:   ", year, make);
        this.vehicleService.getModels(year, make).pipe(
          map(response => response?.model ?? []),
          map(models => ({
            type: LOAD_MODELS_SUCCESS,
            payload: models
          })),
          catchError(() => of({type: LOAD_MODELS_FAIL}))
        )
      )
    }
    )
  )

  // loadModels$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(LOAD_MODELS),
  //     switchMap((action) =>
  //       const { year, make } = action.payload
  //       this.vehicleService.getMakes(year).pipe(
  //         map(response => response?.make ?? []),
  //         map(makes => ({
  //           type: LOAD_MAKES_SUCCESS,
  //           payload: makes
  //         })),
  //         catchError(() => LOAD_MODELS_FAIL)
  //       )
  //       )
  //     )
  //   );  
     

}

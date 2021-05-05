import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoadYears, LoadMakes, LoadModels } from "../store/actions";
import * as fromReducers from "../store/reducers";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;
  makes$: Observable<any>;
  selectedYear: string;
  // import the store into the constructor
  constructor(private store: Store<fromReducers.FitmentState>) {}

  ngOnInit() {
    this.years$ = this.store
      .select(fromReducers.getYears)
      .pipe(tap(v => console.log("Received data")));

    this.makes$ = this.store
      .select(fromReducers.getMakes)
      .pipe(tap(v => console.log("Received makes data")));
  }

  getYears() {
    console.log("getYears");
    // dispatch an action to get array of years
    this.store.dispatch(new LoadYears());
    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  getVehicleMake(year) {
    // Make with year (2021)
    // https://6080be3273292b0017cdbf2a.mockapi.io/makes
    this.selectedYear = year;
    console.log("Year: ", year);
    this.store.dispatch(new LoadMakes(this.selectedYear));
  }

  getVehicleModel(year, make) {
    this.store.dispatch(new LoadModels({year, make}));
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}

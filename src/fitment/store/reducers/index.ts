/*
    This file is a master reducer file that will create and compose state
    taking multiple reducers and building the state tree

  update
  
    The role of reducers is to deal with pure state and immutable objects
*/

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromVehicle from "./vehicle.reducer";

// Composing the parent state (FitmentState) that will encompass smaller chunks of state (vehicleState)
// This is the interface used by the reducers below.
export interface FitmentState {
  vehicle: fromVehicle.VehicleState;
}

// Assigning our reducers to the state,
// ActionReducerMap uses the FitmentState interface
// to describe what all reducers should look like and how they are composed
export const reducers: ActionReducerMap<FitmentState> = {
  vehicle: fromVehicle.reducer
};

export const vehicleSelector = createFeatureSelector<fromVehicle.VehicleState>(
  "fitment"
);
export const getYears = createSelector(
  vehicleSelector,
  (state: any) => {
    return state.vehicle.years;
  }
);

export const getMakes = createSelector(
  vehicleSelector,
  (state: any) => {
    return state.vehicle.makes;
  }
);

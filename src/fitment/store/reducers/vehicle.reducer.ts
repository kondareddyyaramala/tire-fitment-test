// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  makes: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromVehicle.SET_YEARS: {
      console.log("Set the years", JSON.stringify(action));
      return {
        ...state,
        years: action.payload
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }

    case fromVehicle.LOAD_MAKES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        makes: action.payload
      };
    }

    default:
      return state;
  }
  return state;
}

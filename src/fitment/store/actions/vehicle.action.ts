import { Action } from "@ngrx/store";
// import model/interface from db.json here...

// Action constants
export const LOAD_YEARS = "[Fitment] Load Years";
export const SET_YEARS = "[Fitment] Set Years";
export const LOAD_YEARS_FAIL = "[Fitment] Load Years Fail";
export const LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success";

// Action constants
export const LOAD_MAKES = "[Fitment] Load makes";
export const LOAD_MAKES_FAIL = "[Fitment] Load makes Fail";
export const LOAD_MAKES_SUCCESS = "[Fitment] Load makes Success";

// Action constants
export const LOAD_MODELS = "[Fitment] Load models";
export const LOAD_MODELS_FAIL = "[Fitment] Load models Fail";
export const LOAD_MODELS_SUCCESS = "[Fitment] Load Models Success";

// Action constants
export const LOAD_TRIMS = "[Fitment] Load trims";
export const LOAD_TRIMS_FAIL = "[Fitment] Load trims Fail";
export const LOAD_TRIMS_SUCCESS = "[Fitment] Load trims Success";

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: any) {} // Replace 'any' with interface
}

export class SetYears implements Action {
  readonly type = SET_YEARS;
  constructor(public payload: Array<string>) {}
}

// Action creators
export class LoadMakes implements Action {
  readonly type = LOAD_MAKES;
  constructor(public payload: string) {}
}
export class LoadMakesFail implements Action {
  readonly type = LOAD_MAKES_FAIL;
  constructor(public payload: any) {}
}
export class LoadMakesSuccess implements Action {
  readonly type = LOAD_MAKES_SUCCESS;
  constructor(public payload: Array<string>) {} // Replace 'any' with interface
}

// Action creators
export class LoadModels implements Action {
  readonly type = LOAD_MODELS;
  constructor(public payload: { year: string; make: string }) {}
}
export class LoadModelsFail implements Action {
  readonly type = LOAD_MODELS_FAIL;
  constructor(public payload: any) {}
}
export class LoadModelsSuccess implements Action {
  readonly type = LOAD_MODELS_SUCCESS;
  constructor(public payload: Array<string>) {} // Replace 'any' with interface
}

// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | SetYears
  | LoadMakes
  | LoadMakesFail
  | LoadMakesSuccess;

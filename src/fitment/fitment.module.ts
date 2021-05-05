import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";
import { VehicleEffects } from "./store/effects/vehicle.effects";

import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { VehicleService } from "./store/vehicle.service";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("fitment", reducers),
    EffectsModule.forFeature([VehicleEffects])
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
  providers: [VehicleService]
})
export class FitmentModule {}

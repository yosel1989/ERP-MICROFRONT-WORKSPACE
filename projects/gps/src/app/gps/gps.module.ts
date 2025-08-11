import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsHomeComponent } from './gps-home/gps-home.component';
import { GpsRoutingModule } from './gps-routing.module';

@NgModule({
  declarations: [GpsHomeComponent],
  imports: [
    CommonModule,
    GpsRoutingModule
  ]
})
export class GpsModule {}

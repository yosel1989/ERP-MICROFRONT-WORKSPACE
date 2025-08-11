import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpsHomeComponent } from './gps-home/gps-home.component';

const routes: Routes = [
  { path: '', component: GpsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpsRoutingModule { }

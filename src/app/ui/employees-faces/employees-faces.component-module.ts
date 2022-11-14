import { NgModule } from '@angular/core';
import { EmployeesFacesComponent } from './employees-faces.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeesFacesComponent],
  providers: [],
  exports: [EmployeesFacesComponent]
})
export class EmployeesFacesComponentModule {
}

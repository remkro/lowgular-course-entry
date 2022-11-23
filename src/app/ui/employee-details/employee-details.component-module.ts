import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponentModule {
}

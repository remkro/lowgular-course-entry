import { NgModule } from '@angular/core';
import { EmployeeDummyListComponent } from './employee-dummy-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeDummyListComponent],
  providers: [],
  exports: [EmployeeDummyListComponent]
})
export class EmployeeDummyListComponentModule {
}

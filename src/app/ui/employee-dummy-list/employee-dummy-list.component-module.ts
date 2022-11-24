import { NgModule } from '@angular/core';
import { EmployeeDummyListComponent } from './employee-dummy-list.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
  declarations: [EmployeeDummyListComponent],
  providers: [],
  exports: [EmployeeDummyListComponent]
})
export class EmployeeDummyListComponentModule {
}

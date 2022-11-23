import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent],
})
export class EmployeeListComponentModule {}

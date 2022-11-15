import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectListComponent],
  providers: [],
  exports: [ProjectListComponent]
})
export class ProjectListComponentModule {
}

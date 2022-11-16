import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeesFacesComponentModule} from "./ui/employees-faces/employees-faces.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {ProjectServiceModule} from "./services/project.service-module";
import {ProjectListComponentModule} from "./ui/project-list/project-list.component-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {EmployeeDummyServiceModule} from "./services/employee-dummy.service-module";
import {EmployeeDummyListComponent} from "./ui/employee-dummy-list/employee-dummy-list.component";
import {EmployeeDummyListComponentModule} from "./ui/employee-dummy-list/employee-dummy-list.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeesFacesComponentModule,
    EmployeeServiceModule,
    ProjectServiceModule,
    ProjectListComponentModule,
    EmployeeFormComponentModule,
    EmployeeDummyServiceModule,
    EmployeeListComponentModule,
    EmployeeDummyListComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

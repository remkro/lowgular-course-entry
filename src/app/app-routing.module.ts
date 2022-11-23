import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './ui/employee-details/employee-details.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';
import { EmployeeDetailsComponentModule } from './ui/employee-details/employee-details.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'employee-list', component: EmployeeListComponent }, { path: 'employee-details/:id/:name', component: EmployeeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeFormComponentModule, EmployeeDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'employee-list', component: EmployeeListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }
  title: string = 'These are our employees of the month';
  // data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
}

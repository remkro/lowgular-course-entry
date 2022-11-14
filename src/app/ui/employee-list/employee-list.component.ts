import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _client: HttpClient) {
  }
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
}

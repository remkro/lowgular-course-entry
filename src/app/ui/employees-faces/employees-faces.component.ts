import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  constructor(private _employeeService: EmployeeService) {
  }
  title: string = 'Just look how beautiful and smart they are';
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
}

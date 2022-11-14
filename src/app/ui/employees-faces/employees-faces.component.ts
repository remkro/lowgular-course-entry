import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  constructor(private _client: HttpClient) {
  }
  title: string = 'Just look how beautiful and smart they are';
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('assets/data/employees.json');
}

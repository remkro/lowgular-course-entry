import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeDummyService } from '../../services/employee-dummy.service';
import {Observable} from "rxjs";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-dummy-list',
  templateUrl: './employee-dummy-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDummyListComponent {
  constructor(private _employeeDummyService: EmployeeDummyService) {
  }

  data$: Observable<PersonModel[] | null> = this._employeeDummyService.getAll();

  delete(id: string) {
    this._employeeDummyService.delete(id).subscribe(x => alert("Employee was successfully removed"));
  }
}

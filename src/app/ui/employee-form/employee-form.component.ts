import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [Validators.min(18), Validators.required]),
    salary: new FormControl(null, Validators.required)
  });

  onButtonClicked(form: {name:string, age:string, salary:string}) {
    alert('User was successfully added to the database. Name: ' + form.name + ", Age: " + form.age + ", Salary: " + form.salary);
  }
}

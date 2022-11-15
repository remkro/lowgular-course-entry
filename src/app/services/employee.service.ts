import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../model/employee.model";
import {Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._client.get<EmployeeModel[]>('assets/data/employees.json');
  }

}

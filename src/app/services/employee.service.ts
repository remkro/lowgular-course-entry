import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._client.get<PersonModel[]>('assets/data/people.json');
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._client.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

}

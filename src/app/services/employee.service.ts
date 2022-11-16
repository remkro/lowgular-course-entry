import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeModel} from "../model/employee.model";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees'
    ).pipe(
      map((response:ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.profile_image,
            mail: ''
          }
        })
      })
    );
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  delete(id: string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/public/api/v1/delete/' + id);
  }

}

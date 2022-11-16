import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeDummyService {
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
            img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            mail: employeeResponse.employee_name + '@angular.io'
          }
        })
      })
    );
  }

  delete(id: string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/public/api/v1/delete/' + id);
  }

}

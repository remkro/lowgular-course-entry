import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PersonModel} from "../model/person.model";

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._client.get<PersonModel[]>('assets/data/people.json');
  }

}

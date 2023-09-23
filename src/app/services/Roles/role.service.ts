import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _http: HttpClient) { }
  getListRoles():Observable<any>{
    return this._http.get(`${environment.apiUrl}/role`);
  }
}

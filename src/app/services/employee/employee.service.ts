import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {

  }

  getListEmployeeByDepartmentId(id:string):Observable<any>{
    return this._http.get(`${environment.apiUrl}/nhanvien/listByDepartmentId/${id}`);
  }
  addEmployee(data: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/nhanvien`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/nhanvien`);
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/nhanvien/${id}`);
  }

  updateEmployee(id: string, data: any) {
    return this._http.put(`${environment.apiUrl}/nhanvien/${id}`, data);
  }
}

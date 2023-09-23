import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {

  }

  getListEmployeeByDepartmentId(id:string):Observable<any>{
    return this._http.get(`http://localhost:8080/api/v1/nhanvien/listByDepartmentId/${id}`);
  }
  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/api/v1/nhanvien', data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8080/api/v1/nhanvien');
  }

  deleteEmployee(id: string): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/v1/nhanvien/${id}`);
  }

  updateEmployee(id: string, data: any) {
    return this._http.put(`http://localhost:8080/api/v1/nhanvien/${id}`, data);
  }
}

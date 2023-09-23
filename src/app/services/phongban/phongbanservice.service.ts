import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PhongbanserviceService {

  constructor(private _http: HttpClient) {
  }

  getAllPhongBan(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/phongban`);
  }
  getById(data:any): Observable<any> {
    return this._http.get(`${environment.apiUrl}/phongban/${data}`);
  }
  addPhongBan(data:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/phongban`, data);
  }
  updatePhongBan(id: string, data:any):Observable<any>{
    return this._http.put(`${environment.apiUrl}/phongban/${id}`, data);
  }
  deletePhongBan(id: string):Observable<any>{
    return this._http.delete(`${environment.apiUrl}/phongban/${id}`);

  }
}

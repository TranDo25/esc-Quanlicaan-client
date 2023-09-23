import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class DangkycaanService {


  constructor(private _http: HttpClient) {

  }

  sendDangKyCaNhanRequest(data:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/dangkycanhan`, data);
  }
  sendDangKyTapTheRequest(data:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/dangkytapthe`, data);
  }
}

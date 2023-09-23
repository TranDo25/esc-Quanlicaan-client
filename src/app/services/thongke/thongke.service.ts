import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterModel} from "../../model/RegisterModel";
import {Observable} from "rxjs";
import {JwtAuth} from "../../model/JwtAuth";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ThongkeService {

  constructor(private http: HttpClient) { }
  public getInfoThongKeTheoNgay(data:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/thongke/thongketheongay?startDate=${data.startDate}&endDate=${data.endDate}`);
  }
  public getInfoThongKeCaNhan(data:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/thongke/thongkecanhan?startDate=${data.startDate}&endDate=${data.endDate}&userId=${data.userId}`);
  }
  public getInfoThongKeTheoThang(data:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/thongke/thongketheothang?month=${data.month}&year=${data.year}`);
  }
}

import { Injectable } from '@angular/core';
import {JwtAuth} from '../../model/JwtAuth';
import {HttpClient} from "@angular/common/http";
import {RegisterModel} from "../../model/RegisterModel";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {LoginModel} from "../../model/LoginModel";
import {UserModel} from "../../model/user.model";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = 'register';
  loginUrl = 'authenticate';

  constructor(private http: HttpClient) { }
  public register(user:RegisterModel):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.apiUrl}/auth/${this.registerUrl}`, user);

  }
  public login(user:LoginModel):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.apiUrl}/auth/${this.loginUrl}`, user);

  }
  public getUser(token:string):UserModel{
      return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}

/**
 * Tại đây chỉ sử dụng hàm register, hàm login đã có service login thực hiện
 */

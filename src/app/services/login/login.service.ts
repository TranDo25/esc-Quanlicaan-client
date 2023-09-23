import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = false;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private _http: HttpClient) {
  }

  requestLogin(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/api/v1/auth/authenticate', data);
  }

  getNhanVienByUsername(data: any): Observable<any> {
    return this._http.get(`${environment.apiUrl}/getNhanVienByUsername?username=${data}`);
  }

  logout() {
    this.changeLoginStatus();
  }

  // Hàm kiểm tra trạng thái đăng nhập
  isLoggedIn() {
    return localStorage.getItem('loginUser') != null;
  }

  getUserRole() {
    const loginUserString = localStorage.getItem('loginUser');
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      return loginUser.role;
    }

    return '';
  }
  getQuyenDangKyCaAn(){
    const loginUserString = localStorage.getItem('loginUser');
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      return loginUser.quyen;
    }
    return '';
  }
  getUsername(){
    const loginUserString = localStorage.getItem('loginUser');
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      return loginUser.nhanVienName;
    }

    return '';
  }

  changeLoginStatus() {
    this.isAuthenticated = !this.isAuthenticated;
    this.isLoggedInSubject.next(this.isAuthenticated);


  }
}

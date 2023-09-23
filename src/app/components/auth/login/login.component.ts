import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../services/login/login.service";

import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {UserModel} from "../../../model/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _authenticationService: AuthenticationService,
              private _loginService: LoginService,
              private router: Router) {
  }

  hide = true;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.processsLogin({
      "username": email,
      "password": password
    });

  }

  processsLogin(data: any) {
    this._loginService.requestLogin(data).subscribe({
      next: (res) => {

        localStorage.setItem('jwtToken', res.token);
        console.log(res.token);
        const email = this.loginForm.value.email;
        this.fetchLoginUser({
          "username": email,
        })
      },
      error: (err) => {
        alert('đăng nhập không thành công');
        console.log(err)

      }
    });

  }

  fetchLoginUser(data: any) {
    this._loginService.getNhanVienByUsername(data.username).subscribe({
      next: (res) => {
        if(res.trangThai == true){
          // Chuyển đối tượng thành chuỗi JSON
          const objectString = JSON.stringify(res);
          localStorage.setItem('loginUser', objectString);

          //thay đổi trạng thái của biến xác thực đăng nhập
          this._loginService.changeLoginStatus();
          this.router.navigate(['home']);
        }
        else{
          alert("tài khoản chưa được active!");
          localStorage.removeItem('loginUser');

        }

      },
      error: (err) => {
        // alert('Không lấy được thông tin đăng nhập');
        console.log(err);
      }
    });
  }
}

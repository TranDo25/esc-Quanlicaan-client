import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login/login.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  isLoggedIn: boolean = true;
  constructor(private authService: LoginService, private router: Router, private snackBar: MatSnackBar) {
  }
  ngOnInit() {
    // Đăng ký lắng nghe sự thay đổi của isLoggedIn$
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  onLogout() {
    this.snackBar.open('đăng xuất thành công', '', {
      duration: 3000,
      verticalPosition: 'top'
    })
    // Xóa JWT token từ localStorage
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('loginUser');

    this.authService.logout();
    this.router.navigate(['home']);

  }

}

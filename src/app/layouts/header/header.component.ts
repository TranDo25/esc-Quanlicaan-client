import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from "../../services/sidenav/side-nav.service";
import {LoginService} from "../../services/login/login.service";
import {LoginComponent} from "../../components/auth/login/login.component";
import {LogoutComponent} from "../../components/auth/logout/logout.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  title: string = "Quản lý ăn ca";
  isLoggedIn = true;
  username: any = '';
  isUserAdmin = false;
  custom_font: any = 'smaller_font';

  constructor(private sideNavService: SideNavService, private authService: LoginService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.isLoggedIn = false;
    // Đăng ký lắng nghe sự thay đổi của isLoggedIn$
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }

  clickMenu() {
    this.sideNavService.toggle();
  }


  ngDoCheck(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.authService.getUsername();

    } else {
      this.isLoggedIn = false;
    }
    if(this.authService.getUserRole()=='ADMIN'){
      this.isUserAdmin = true;
    }
    else this.isUserAdmin = false;
  }


}

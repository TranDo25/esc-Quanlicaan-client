import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {SideNavService} from "../../services/sidenav/side-nav.service";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, DoCheck {
  isUserAdmin = false;
  isLoggedIn = false;
  isCaNhanTapThe = false;
  constructor(
    private sideNavService: SideNavService,
    private router: Router,
    private _loginService: LoginService
  ) {

  }

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
    if (this._loginService.getUserRole() == 'ADMIN') {
      this.isUserAdmin = true;
    } else {
      this.isUserAdmin = false;
    }
    if (this._loginService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    if (this._loginService.getQuyenDangKyCaAn() == 'tapthe') {
      this.isCaNhanTapThe = true;
    } else if(this._loginService.getQuyenDangKyCaAn()=='canhan'){
      this.isCaNhanTapThe = false;
    }
  }

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  panelOpenState: boolean = false;
  ismenurequired = false;

  panelOpenStateQuanLy: boolean = false;
  panelOpenStateDangKy: boolean = false;
  panelOpenStateThongKe: boolean = false;


  ngOnInit(): void {
    this.isUserAdmin = false;
    this.isLoggedIn = false;
    this.isCaNhanTapThe = false;
  }


}

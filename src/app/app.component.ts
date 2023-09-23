import {Component, DoCheck, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {LoginService} from "./services/login/login.service";


/** Flat node with expandable and level information */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'angular-dashboard';
  isLoggedIn: any;

  constructor(private _loginService: LoginService) {
  }

  ngDoCheck(): void {
    if (this._loginService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.isLoggedIn = false;
    localStorage.clear();
  }

  // Xóa localStorage khi trình duyệt đóng
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event): void {
    localStorage.clear();
  }
}

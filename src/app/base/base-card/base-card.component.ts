import {Component, DoCheck, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit, DoCheck{
  isLoggedIn = false;
  constructor(private _loginService: LoginService) {
  }
  ngDoCheck(): void {
    if (this._loginService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.isLoggedIn = false;

  }
}

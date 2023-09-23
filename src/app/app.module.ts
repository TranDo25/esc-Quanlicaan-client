import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {NhanvienAddEditComponent} from './components/nhanvienmodule/nhanvien-add-edit/nhanvien-add-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from "@angular/material/menu";
import {NhanvienComponent} from "./components/nhanvienmodule/nhanvien/nhanvien.component";
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import {MatCardModule} from "@angular/material/card";
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PhongbanComponent } from './components/phongbanmodule/phongban/phongban.component';
import { HomeComponent } from './components/home/home.component';
import { DangkycanhanComponent } from './components/dangkycanhan/dangkycanhan.component';
import { DangkytaptheComponent } from './components/dangkytapthe/dangkytapthe.component';
import { ThongkecanhanComponent } from './components/thongkecanhan/thongkecanhan.component';
import { ThongketheongayComponent } from './components/thongketheongay/thongketheongay.component';
import { ThongketheothangComponent } from './components/thongketheothang/thongketheothang.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {AuthenticationInterceptor} from "./services/authentication/interceptor";
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PhongBanAddEditComponent } from './components/phongbanmodule/phong-ban-add-edit/phong-ban-add-edit.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { InputNumberGroupComponent } from './components/input-number-group/input-number-group.component';
import { InputDangKyTapTheComponent } from './components/input-dang-ky-tap-the/input-dang-ky-tap-the.component';
import { OverlayComponent } from './layouts/overlay/overlay.component';
import { BaseCardComponent } from './base/base-card/base-card.component';
import { BaseThongkeComponent } from './base/base-thongke/base-thongke.component';
import { ItemThongketheongayComponent } from './components/thongketheongay/item-thongketheongay/item-thongketheongay.component';
import { ItemThongkecanhanComponent } from './components/thongkecanhan/item-thongkecanhan/item-thongkecanhan.component';
import {CurrencyFormatPipe} from "./core/pipe/currency-format.pipe";
import {DateFormatPipe} from "./core/pipe/date-format.pipe";
import { ItemThongketheothangComponent } from './components/thongketheothang/item-thongketheothang/item-thongketheothang.component';
@NgModule({
  declarations: [
    CurrencyFormatPipe,
    DateFormatPipe,
    AppComponent,
    NhanvienAddEditComponent,
    NhanvienComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    FooterComponent,
    PhongbanComponent,
    HomeComponent,
    DangkycanhanComponent,
    DangkytaptheComponent,
    ThongkecanhanComponent,
    ThongketheongayComponent,
    ThongketheothangComponent,
    NotfoundComponent,
    LogoutComponent,
    RegisterComponent,
    PhongBanAddEditComponent,
    InputNumberGroupComponent,
    InputDangKyTapTheComponent,
    OverlayComponent,
    BaseCardComponent,
    BaseThongkeComponent,
    ItemThongketheongayComponent,
    ItemThongkecanhanComponent,
    ItemThongketheothangComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule, MatSelectModule,
    MatNativeDateModule, MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDividerModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    FormsModule, MatTabsModule, MatExpansionModule, MatAutocompleteModule, MatCheckboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}

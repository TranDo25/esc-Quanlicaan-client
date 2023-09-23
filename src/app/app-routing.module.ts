import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {NhanvienComponent} from "./components/nhanvienmodule/nhanvien/nhanvien.component";
import {PhongbanComponent} from "./components/phongbanmodule/phongban/phongban.component";
import {DangkycanhanComponent} from "./components/dangkycanhan/dangkycanhan.component";
import {HomeComponent} from "./components/home/home.component";
import {DangkytaptheComponent} from "./components/dangkytapthe/dangkytapthe.component";
import {ThongkecanhanComponent} from "./components/thongkecanhan/thongkecanhan.component";
import {ThongketheongayComponent} from "./components/thongketheongay/thongketheongay.component";
import {ThongketheothangComponent} from "./components/thongketheothang/thongketheothang.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {HasRoleGuard} from "./has-role.guard";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    // canActivate: [HasRoleGuard]

  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'nhanvien', component: NhanvienComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: 'ADMIN',
    }
  },
  {
    path: 'phongban', component: PhongbanComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: 'ADMIN',
    }
  },
  {
    path: 'dangkycanhan', component: DangkycanhanComponent,
    canActivate: [HasRoleGuard]
  },
  {
    path: 'dangkytapthe', component: DangkytaptheComponent,
    canActivate: [HasRoleGuard]

  },

  {
    path: 'thongkecanhan', component: ThongkecanhanComponent
    , canActivate: [HasRoleGuard]
  },
  {
    path: 'thongketheongay', component: ThongketheongayComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: 'ADMIN',
    }
  },
  {
    path: 'thongketheothang', component: ThongketheothangComponent,
    canActivate: [HasRoleGuard],
    data: {
      role: 'ADMIN',
    }
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {
}

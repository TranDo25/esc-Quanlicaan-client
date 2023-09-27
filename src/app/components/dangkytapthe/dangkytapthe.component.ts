import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../../services/employee/employee.service";
import {DangkytaptheModel} from "../../model/dangkytapthe.model";
import {PhongbanserviceService} from "../../services/phongban/phongbanservice.service";
import {map, timer} from "rxjs";
import {format} from "date-fns";
import {DangkytaptherequestModel} from "../../model/dangkytaptherequest.model";
import {DangkycaanService} from "../../services/dangkycaan/dangkycaan.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dangkytapthe',
  templateUrl: './dangkytapthe.component.html',
  styleUrls: ['./dangkytapthe.component.scss']
})
export class DangkytaptheComponent implements OnInit {
  displayedColumns: string[] = [
    'hoTen',
    'SlCa1',
    'SlCa2',
    'SlCa3'
  ];
  dsNhanVien: any;
  idNhanVien: any;

  constructor(private _nhanVienService: EmployeeService,
              private _phongBanService: PhongbanserviceService,
              private _dangKyCaAnService: DangkycaanService,
              private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    const loginUserString = localStorage.getItem('loginUser');
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      this.idNhanVien = loginUser.nhanVienId;
      this.hoTenReadOnly = loginUser.nhanVienName;


      if (loginUser.phongBanId) {
        this.fetchPhongBanNameByPhongBanId(loginUser.phongBanId);

      } else {
        this.phongBanReadOnly = "Chưa có phòng ban!";

      }


    }
    timer(0, 1000).pipe(
      map(() => format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
    ).subscribe((dateTime) => {
      this.ngayDkyReadOnly = dateTime;
    });

    this.getDsNhanVienByIdPhongBan();

  }

  private fetchPhongBanNameByPhongBanId(id: any) {
    this._phongBanService.getById(id).subscribe({
      next: (res) => {
        this.phongBanReadOnly = res.phongBanName;
      },
      error: (err) => {
        alert('cannot get phongban name!');
        console.log(err);
      }
    })
  }

  danhSachDangKy: any = [];
  hoTenReadOnly: any;
  phongBanReadOnly: any;
  ngayDkyReadOnly: string = '';

  getDsNhanVienByIdPhongBan() {
    const loginUserString = localStorage.getItem('loginUser');

    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      this._nhanVienService.getListEmployeeByDepartmentId(loginUser.phongBanId).subscribe({
        next: (res) => {
          this.dsNhanVien = res;
        },
        error: (err) => {
          alert('cannot fetch list nhanvien!');
          console.log(err);
        }
      });
    }

  }

  handleSoLuongDky($event: DangkytaptheModel) {
    debugger;
    // Tìm phần tử có id giống với id của $event (nếu có)
    const existingItem = this.danhSachDangKy.find((item: DangkytaptheModel) => item.idNhanVien === $event.idNhanVien);

    if (existingItem) {
      // Nếu tìm thấy, loại bỏ phần tử này
      const index = this.danhSachDangKy.indexOf(existingItem);
      this.danhSachDangKy.splice(index, 1);
    }

    // Sau đó, push $event mới vào danh sách
    this.danhSachDangKy.push($event);

  }

  onSubmit() {
    let count = 0;
    for (let i = 0; i < this.danhSachDangKy.length; i++) {
      count += this.danhSachDangKy[i].soLuongCa1 +
        this.danhSachDangKy[i].soLuongCa2 +
        this.danhSachDangKy[i].soLuongCa3;
    }
    if (count == 0) {
      alert("bạn chưa đăng ký ca nào!")
    } else {
      const requestData: DangkytaptherequestModel = {
        idNhanVien: this.idNhanVien,
        danhSachDangKy: this.danhSachDangKy
      }
      this._dangKyCaAnService.sendDangKyTapTheRequest(requestData).subscribe({
        next: (val) => {
          this.snackBar.open(val.userMsg, '', {
            duration: 3000,
            verticalPosition: 'top'
          })
        },
        error: (err) => {
          alert("có lỗi xảy ra");
          console.log(err);
        }
      })
    }

  }
}

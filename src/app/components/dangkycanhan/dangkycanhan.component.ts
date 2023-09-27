import {Component, OnInit} from '@angular/core';
import {PhongbanserviceService} from "../../services/phongban/phongbanservice.service";
import {map, Observable, timer} from "rxjs";
import {format} from 'date-fns';
import {DangkycanhanModel} from "../../model/dangkycanhan.model";
import {DangkycaanService} from "../../services/dangkycaan/dangkycaan.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dangkycanhan',
  templateUrl: './dangkycanhan.component.html',
  styleUrls: ['./dangkycanhan.component.scss']
})
export class DangkycanhanComponent implements OnInit {
  private SlCa1: number = 0;
  private SlCa2: number = 0;
  private SlCa3: number = 0;
  hoTenReadOnly: any;
  phongBanReadOnly: any;
  ngayDkyReadOnly: string = '';
  idNhanVien: any;

  handleInputCa1Change($event: any) {
    this.SlCa1 = $event;
  }

  handleInputCa2Change($event: any) {
    this.SlCa2 = $event;
  }

  handleInputCa3Change($event: any) {
    this.SlCa3 = $event;
  }

  constructor(private _phongBanService: PhongbanserviceService,
              private snackBar: MatSnackBar, private _dangkycaanService: DangkycaanService) {

  }

  ngOnInit(): void {
    const loginUserString = localStorage.getItem('loginUser');
    console.log(loginUserString);
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      this.hoTenReadOnly = loginUser.nhanVienName;
      this.idNhanVien = loginUser.nhanVienId;
      if (loginUser.phongBanId) {
        this.fetchPhongBanNameByPhongBanId(loginUser.phongBanId);

      }
      else {
        this.phongBanReadOnly = "Chưa có phòng ban!";

      }

    }
    timer(0, 1000).pipe(
      map(() => format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
    ).subscribe((dateTime) => {
      this.ngayDkyReadOnly = dateTime;
    });


  }

  private fetchPhongBanNameByPhongBanId(id: any) {
    this._phongBanService.getById(id).subscribe({
      next: (res) => {
        this.phongBanReadOnly = res.phongBanName;
      },
      error: (err) => {
        alert('cannot get phongban name!');
      }
    })
  }

  onSubmit() {
    if (this.SlCa1 + this.SlCa2 + this.SlCa3 == 0) {
      alert('bạn chưa chọn ca nào');
    } else {
      const requestData: DangkycanhanModel = {
        idNhanVien: this.idNhanVien,
        soLuongCa1: this.SlCa1,
        soLuongCa2: this.SlCa2,
        soLuongCa3: this.SlCa3
      }

      this._dangkycaanService.sendDangKyCaNhanRequest(requestData).subscribe({
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
      });


    }
  }
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ThongkeService} from "../../services/thongke/thongke.service";
import {PhongbanserviceService} from "../../services/phongban/phongbanservice.service";

@Component({
  selector: 'app-thongkecanhan',
  templateUrl: './thongkecanhan.component.html',
  styleUrls: ['./thongkecanhan.component.scss'],
})
export class ThongkecanhanComponent implements OnInit {
  ngOnInit(): void {
    const currentDate = new Date();
    this.startDate = currentDate.toISOString().substring(0, 10);
    this.endDate = currentDate.toISOString().substring(0, 10);
    this.fetchDataFromApi();

  }

  tongSoCa1: any = 0;
  tongSoCa2: any = 0;
  tongSoCa3: any = 0;

  startDate: any;
  endDate: any;
  dataApi: any;
  tongSoLuong: any = 0;
  thanhTien: any = 0;
  donGia: any = 25000;
  hoTen: any;
  phonBanName: any;
  ngayHienTai: any;

  constructor(private _thongKeService: ThongkeService, private phongBanService: PhongbanserviceService) {
  }

  fetchDataFromApi() {
    const loginUserString = localStorage.getItem('loginUser');
    let userId = '';
    console.log(loginUserString);
    if (loginUserString) {
      const loginUser = JSON.parse(loginUserString);
      userId = loginUser.nhanVienId;
      this.hoTen = loginUser.nhanVienName;
      if (loginUser.phongBanId) {
        this.phongBanService.getById(loginUser.phongBanId).subscribe({
          next: (res) => {
            this.phonBanName = res.phongBanName;


          },
          error: (err) => {
            alert(err);
          }
        });
      } else {
        this.phonBanName = 'chưa thiết lập';

      }


    }
    this.ngayHienTai = new Date();
    if (this.startDate > this.endDate) {
      alert('ngày bắt đầu không được lớn hơn ngày kết thúc');
    } else {
      // Chuyển các giá trị thành đối tượng Date để so sánh
      const currentDate = new Date();
      const currentDateObj = new Date(currentDate);
      const startDateObj = new Date(this.startDate);
      const endDateObj = new Date(this.endDate);
      if (startDateObj > currentDateObj || endDateObj > currentDateObj) {
        alert('Ngày xem không được lớn hơn ngày hiện tại');
      } else {
        const data = {
          "startDate": this.startDate,
          "endDate": this.endDate,
          "userId": userId
        }
        this._thongKeService.getInfoThongKeCaNhan(data).subscribe({
          next: (res) => {
            this.dataApi = res;
            // console.log(this.dataApi);
            this.tongSoCa1 = 0;
            this.tongSoCa2 = 0;
            this.tongSoCa3 = 0;

            for (let i = 0; i < this.dataApi.length; i++) {
              this.tongSoCa1 += this.dataApi[i].soLuongCa1;
              this.tongSoCa2 += this.dataApi[i].soLuongCa2;
              this.tongSoCa3 += this.dataApi[i].soLuongCa3;

            }
            this.tongSoLuong = this.tongSoCa1 + this.tongSoCa2 + this.tongSoCa3;
            this.thanhTien = this.tongSoLuong * 25000;

          },
          error: (err) => {
            alert('cannot fetch thongkecanhan');
            console.log(err);
          }
        });
      }
    }

  }

  onFindData() {
    this.fetchDataFromApi();
  }
}

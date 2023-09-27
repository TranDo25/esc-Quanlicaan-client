import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-thongketheothang',
  templateUrl: './item-thongketheothang.component.html',
  styleUrls: ['./item-thongketheothang.component.scss']
})
export class ItemThongketheothangComponent implements OnInit {
  tenPhongBan: any;
  @Input() stt: any;
  @Input() data: any;
  hoTenNguoiAn: any;
  soLuongCa1: any;
  soLuongCa2: any;
  soLuongCa3: any;
  thanhTien: any;
  donGia: any = 25000;
  countTongCa1: any = 0;
  countTongCa2: any = 0;
  countTongCa3: any = 0;
  tongToanBo: any = 0;
  tongThanhTien: any = 0;
  dsThongKe:any = [];
  ngOnInit(): void {
    this.tenPhongBan = this.data.phongBanName;
    this.dsThongKe = this.data.dsThongKe;
    for (let i = 0; i < this.dsThongKe.length; i++) {
      this.countTongCa1 += this.dsThongKe[i].slCa1;
      this.countTongCa2 += this.dsThongKe[i].slCa2;
      this.countTongCa3 += this.dsThongKe[i].slCa3;
      this.tongToanBo = this.countTongCa1 + this.countTongCa2 + this.countTongCa3;
      this.tongThanhTien = this.tongToanBo * this.donGia;
    }
  }

}

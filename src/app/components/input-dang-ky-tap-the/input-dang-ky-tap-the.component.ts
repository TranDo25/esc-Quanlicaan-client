import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DangkytaptheModel} from "../../model/dangkytapthe.model";

@Component({
  selector: 'app-input-dang-ky-tap-the',
  templateUrl: './input-dang-ky-tap-the.component.html',
  styleUrls: ['./input-dang-ky-tap-the.component.scss']
})
export class InputDangKyTapTheComponent implements OnInit {

  hoTen: any;
  phongBan: any;
  ngayDangKy: any;
  idNhanVien: any;
  SlCa1: any = 0;
  SlCa2: any = 0;
  SlCa3: any = 0;
  isChecked: any = false;
  @Input() nhanVien: any;
  @Output() dataEmitter: EventEmitter<DangkytaptheModel> = new EventEmitter<DangkytaptheModel>();
  ngOnInit(): void {
    this.hoTen = this.nhanVien.nhanVienName;
    this.idNhanVien = this.nhanVien.nhanVienId;
  }
// Ví dụ trong một phương thức của component
  emitData() {
    let data: DangkytaptheModel = {
      idNhanVien: this.idNhanVien,
      soLuongCa1: this.SlCa1,
      soLuongCa2: this.SlCa2,
      soLuongCa3: this.SlCa3,
    };

    this.dataEmitter.emit(data);
  }

  handleInputCa1($event: number) {
    this.SlCa1 = $event;
  }

  handleInputCa2($event: number) {
    this.SlCa2 = $event;

  }

  handleInputCa3($event: number) {
    this.SlCa3 = $event;

  }
}

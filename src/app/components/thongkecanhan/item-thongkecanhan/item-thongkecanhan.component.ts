import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-thongkecanhan',
  templateUrl: './item-thongkecanhan.component.html',
  styleUrls: ['./item-thongkecanhan.component.scss']
})
export class ItemThongkecanhanComponent implements OnInit {
  ngOnInit(): void {
    this.soLuongCa1 = this.data.soLuongCa1;
    this.soLuongCa2 = this.data.soLuongCa2;
    this.soLuongCa3 = this.data.soLuongCa3;
    this.ngayDK = this.data.ngayDK;
  }

  @Input() data: any;
  soLuongCa1: any;
  soLuongCa2: any;
  soLuongCa3: any;
  ngayDK: any;
  @Input() stt: any;

}

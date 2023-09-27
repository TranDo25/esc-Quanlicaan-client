import {Component, Output} from '@angular/core';
import {ThongkeService} from "../../services/thongke/thongke.service";
import {FilterThongketheongayService} from "../../services/thongke/filter-thongketheongay.service";

@Component({
  selector: 'app-thongketheongay',
  templateUrl: './thongketheongay.component.html',
  styleUrls: ['./thongketheongay.component.scss']
})
export class ThongketheongayComponent {
  tongSoSuat: any;
  dsThongKeCaAn: any = [];
  startDate: any = new Date();
  endDate: any = new Date();

  constructor(private _thongkeService: ThongkeService,
              private _filterService: FilterThongketheongayService
              ) {
  }

  ngOnInit(): void {
    let currentDate = new Date();
    this.startDate = currentDate.toISOString().substring(0, 10);
    this.endDate = currentDate.toISOString().substring(0, 10);
    this.fetchDataToListDky();
    this._filterService.updateData("all");
  }

  onFindData() {
    this.fetchDataToListDky();
  }

  private fetchDataToListDky() {
    if (this.startDate > this.endDate) {
      alert('ngày bắt đầu không được lớn hơn ngày kết thúc');
    } else {
      const currentDate = new Date();
      const currentDateObj = new Date(currentDate);
      const startDateObj = new Date(this.startDate);
      const endDateObj = new Date(this.endDate);
      if (startDateObj > currentDateObj || endDateObj > currentDateObj) {
        alert('Ngày xem không được lớn hơn ngày hiện tại');
      } else {
        const data = {
          "startDate": this.startDate,
          "endDate": this.endDate
        }
        this._thongkeService.getInfoThongKeTheoNgay(data).subscribe({
          next: (val) => {
            this.dsThongKeCaAn = val;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }

    }

  }

  onSelectChange($event: any) {
    const selectedValue = $event.target.value;
    this._filterService.updateData(selectedValue);
  }
}

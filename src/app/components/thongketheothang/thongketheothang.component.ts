import {Component, OnInit} from '@angular/core';
import {ThongkeService} from "../../services/thongke/thongke.service";

@Component({
  selector: 'app-thongketheothang',
  templateUrl: './thongketheothang.component.html',
  styleUrls: ['./thongketheothang.component.scss']
})
export class ThongketheothangComponent implements OnInit {
  dataFromApi: any;
  selectedMonth: any = '';
  dataLength = 0;
  onFindData() {
// Chuyển giá trị từ input thành Date
    const dateValue = new Date(this.selectedMonth);

// Lấy giá trị ngày và tháng từ đối tượng Date
    const month = dateValue.getMonth() + 1; // +1 vì tháng trong JavaScript bắt đầu từ 0
    const year = dateValue.getFullYear();

    const data = {
      "month": month,
      "year": year
    }
    this.fetchDataFromApi(data);


  }

  constructor(private _thongKeService: ThongkeService) {
  }

  fetchDataFromApi(data: any) {


    this._thongKeService.getInfoThongKeTheoThang(data).subscribe({
      next: (res) => {
        this.dataFromApi = res;
        this.dataLength = this.dataFromApi.length;
      },
      error: (err) => {
        alert("error!");
        console.log(err);
      }

    });
  }

  ngOnInit(): void {
    // Lấy thời gian hiện tại
    const currentDate = new Date();

// Lấy tháng hiện tại (từ 0 đến 11, nên cần cộng thêm 1)
    const currentMonth = currentDate.getMonth() + 1;

// Lấy năm hiện tại (4 chữ số)
    const currentYear = currentDate.getFullYear();
    const data = {
      "month": currentMonth,
      "year": currentYear
    }

    this.fetchDataFromApi(data);
    const currentMonth2 = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Chuyển thành chuỗi và định dạng 'MM'
    this.selectedMonth = `${currentYear}-${currentMonth2}`; //
  }
}

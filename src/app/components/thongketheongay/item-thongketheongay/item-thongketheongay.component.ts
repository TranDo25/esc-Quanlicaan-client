import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ThongkeService} from "../../../services/thongke/thongke.service";
import {FilterThongketheongayService} from "../../../services/thongke/filter-thongketheongay.service";

@Component({
  selector: 'app-item-thongketheongay',
  templateUrl: './item-thongketheongay.component.html',
  styleUrls: ['./item-thongketheongay.component.scss']
})
export class ItemThongketheongayComponent implements OnInit, DoCheck {
  @Input() shiftName: any = '';
  @Input() totalMeals: any = 0;
  @Input() totalMoneys: any = 0;
  @Input() listDky: any = [];
  receivedFilterData = '';
  isDisplay = true;

  ngOnInit(): void {
  }

  constructor(private _filterService: FilterThongketheongayService) {

  }

  ngDoCheck(): void {
    this._filterService.getData().subscribe(data => {
      debugger;
      this.receivedFilterData = data;
      if (this.receivedFilterData !== this.shiftName) {
        if (this.receivedFilterData === 'all') {
          this.isDisplay = true;
        } else {
          this.isDisplay = false;

        }
      } else if (this.receivedFilterData === this.shiftName) {
        this.isDisplay = true;
      }
    });
  }


}

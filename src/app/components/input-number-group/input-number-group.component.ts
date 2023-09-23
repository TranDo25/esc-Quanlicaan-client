import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-number-group',
  templateUrl: './input-number-group.component.html',
  styleUrls: ['./input-number-group.component.scss']
})
export class InputNumberGroupComponent implements OnInit{

  @Input() ShiftName: string | undefined;
  isChecked: boolean = false;

  suatAnDky: any = 0;
  @Output() quantityChanged = new EventEmitter<number>(); // Sự kiện khi số lượng thay đổi

  ngOnInit(): void {
    this.isChecked = false;
    this.suatAnDky = 0;
  }
  onInputChange() {
    // Khi trường input thay đổi, phát ra sự kiện và truyền giá trị lên component cha
    debugger;
    this.quantityChanged.emit(this.suatAnDky);
  }

  onCheckboxChange($event: any) {
    if($event === false){
      this.suatAnDky = 0;
    }
  }
}

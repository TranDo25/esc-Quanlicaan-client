import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoreService} from "../../../core/core.service";
import {PhongbanserviceService} from "../../../services/phongban/phongbanservice.service";
import {RoleService} from "../../../services/role/role.service";

@Component({
  selector: 'app-phong-ban-add-edit',
  templateUrl: './phong-ban-add-edit.component.html',
  styleUrls: ['./phong-ban-add-edit.component.scss']
})
export class PhongBanAddEditComponent implements OnInit{
  pbForm: FormGroup;
  listPhongBan: any[] = [];
  phongban: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService:CoreService,
    private _fb: FormBuilder,
    private _phongBanService: PhongbanserviceService,
    private _dialogRef: MatDialogRef<PhongBanAddEditComponent>) {
    this.pbForm = this._fb.group({
      phongBanId:new FormControl('',[Validators.required, Validators.minLength(6)]),
      phongBanCode: new FormControl('',[Validators.required, Validators.minLength(6)]),
      phongBanName: new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit() {
    this.getPhongBanList();
    this.pbForm.patchValue(this.data);

  }

  getPhongBanList() {
    this._phongBanService.getAllPhongBan().subscribe({
      next: (data: any[]) => {
        this.listPhongBan = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  onFormSubmit() {
    if (this.pbForm.valid) {
      if(this.data){
        this._phongBanService.updatePhongBan(this.data.phongBanId, this.pbForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Update phòng ban thành công', 'done');
            this._dialogRef.close(true);
          },
          error: (err) => {
            this._coreService.openSnackBar('lỗi khi update phòng ban','error');
            console.error(err)
          }
        })
      }
      else{
        this._phongBanService.addPhongBan(this.pbForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Thêm mới phòng ban thành công', 'done');

            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err)
          }
        })
      }

    }
  }
}

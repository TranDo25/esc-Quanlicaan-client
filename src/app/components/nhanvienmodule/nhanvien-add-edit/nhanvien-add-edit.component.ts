import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../services/employee/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoreService} from "../../../core/core.service";
import {PhongbanserviceService} from "../../../services/phongban/phongbanservice.service";
import {RoleService} from "../../../services/role/role.service";

@Component({
  selector: 'app-nhanvien-add-edit',
  templateUrl: './nhanvien-add-edit.component.html',
  styleUrls: ['./nhanvien-add-edit.component.scss']
})
export class NhanvienAddEditComponent implements OnInit {
  nvForm: FormGroup;
  listPhongBan: any[] = [];
  listRoles: any[] = [];
  phongban: string[] = [];
  isReadOnlyPassword: boolean = false;

// Tạo một validator số điện thoại tùy chỉnh
  phoneNumberValidator(control: FormControl) {
    const phoneNumberPattern = /^[0-9]{10}$/; // Đây là một ví dụ về mẫu số điện thoại gồm 10 chữ số.

    if (control.value && !phoneNumberPattern.test(control.value)) {
      return {phoneNumber: true}; // Trả về một object có thuộc tính 'phoneNumber' nếu không hợp lệ.
    }

    return null; // Trả về null nếu hợp lệ.
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _phongBanService: PhongbanserviceService,
    private _roleService: RoleService,
    private _dialogRef: MatDialogRef<NhanvienAddEditComponent>) {
    this.nvForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required,Validators.minLength(6) ]],
      quyen: ['', Validators.required],
      nhanVienCode: ['', [Validators.required, Validators.minLength(6)]],
      nhanVienName: ['', [Validators.required, Validators.minLength(6)]],
      trangThai: ['', Validators.required],
      phone: ['', [Validators.required, this.phoneNumberValidator]],
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      diaChi: ['', [Validators.required]],
      role: ['', [Validators.required]],
      ngaySinh: ['', [Validators.required]],
      phongBanId: ['', [Validators.required]],
    })
  }


  ngOnInit() {
    this.getPhongBanList();
    this.getListRoles();

    this.nvForm.patchValue(this.data);

  }

  getListRoles() {
    this._roleService.getListRoles().subscribe({
      next: (data: any[]) => {
        this.listRoles = data;
        // console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
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
    if (this.nvForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.nhanVienId, this.nvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Update nhân viên thành công', 'done');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err)
          }
        })
      } else {
        this._empService.addEmployee(this.nvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Thêm mới nhân viên thành công', 'done');

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

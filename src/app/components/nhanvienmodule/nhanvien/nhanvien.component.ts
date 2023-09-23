import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSidenav} from "@angular/material/sidenav";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeService} from "../../../services/employee/employee.service";
import {CoreService} from "../../../core/core.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NhanvienAddEditComponent} from "../nhanvien-add-edit/nhanvien-add-edit.component";
import {PhongbanserviceService} from "../../../services/phongban/phongbanservice.service";

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss']
})
export class NhanvienComponent implements OnInit {

  ngOnInit(): void {
    this.getEmployeeList();
  }

  displayedColumns: string[] = [
    'nhanVienCode',
    'nhanVienName',
    'username',
    'quyen',
    'trangThai',
    'phone',
    'email',
    'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService,
    private observer: BreakpointObserver
  ) {

  }

  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width:800px)']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }



  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({

      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEditNhanVienForm() {
    const dialogRef = this._dialog.open(NhanvienAddEditComponent);
    dialogRef.afterClosed().subscribe({

      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      }
    })
  }

  deleteEmployee(id: string) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('xóa nhân viên thành công', 'done')
        this.getEmployeeList();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  openEditForm(data: any) {
    console.log(data);
    const dialogRef = this._dialog.open(NhanvienAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({

      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      }
    })

  }

}

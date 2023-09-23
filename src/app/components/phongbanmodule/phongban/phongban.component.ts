import {Component, OnInit, ViewChild} from '@angular/core';
import {PhongbanserviceService} from "../../../services/phongban/phongbanservice.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {PhongBanAddEditComponent} from "../phong-ban-add-edit/phong-ban-add-edit.component";
import {CoreService} from "../../../core/core.service";

@Component({
  selector: 'app-phongban',
  templateUrl: './phongban.component.html',
  styleUrls: ['./phongban.component.scss']
})
export class PhongbanComponent implements OnInit{
  ngOnInit(): void {
    this.getPhongBanList();
  }
  displayedColumns:string[]=[
    'phongBanCode',
    'phongBanName',
    'action'
  ]
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _coreService: CoreService, private _dialog: MatDialog, private _phongBanService: PhongbanserviceService) {
}
  private getPhongBanList() {
    this._phongBanService.getAllPhongBan().subscribe({
      next: (res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error: (err)=>{
          alert('cannot fetch phongban!');
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddPhongBanForm(){
    const dialogRef = this._dialog.open(PhongBanAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getPhongBanList();
        }
      }
    })
  }
  openEditForm(data: any){
    const dialogRef = this._dialog.open(PhongBanAddEditComponent,{data});
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getPhongBanList();
        }
      }
    })
  }
  deletePhongBan(id:string){
    this._phongBanService.deletePhongBan(id).subscribe({
      next:(res)=>{
        this._coreService.openSnackBar('xóa phòng ban thành công');
        this.getPhongBanList();
      },
      error:(err)=>{
        alert('lỗi xóa phòng ban');
        console.log(err);
      }
    })
  }
}

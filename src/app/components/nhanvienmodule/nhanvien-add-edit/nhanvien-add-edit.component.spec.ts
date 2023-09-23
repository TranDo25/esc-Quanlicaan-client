import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienAddEditComponent } from './nhanvien-add-edit.component';

describe('NhanvienAddEditComponent', () => {
  let component: NhanvienAddEditComponent;
  let fixture: ComponentFixture<NhanvienAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhanvienAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

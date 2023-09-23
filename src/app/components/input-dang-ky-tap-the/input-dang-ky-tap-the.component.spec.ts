import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDangKyTapTheComponent } from './input-dang-ky-tap-the.component';

describe('InputDangKyTapTheComponent', () => {
  let component: InputDangKyTapTheComponent;
  let fixture: ComponentFixture<InputDangKyTapTheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDangKyTapTheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDangKyTapTheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

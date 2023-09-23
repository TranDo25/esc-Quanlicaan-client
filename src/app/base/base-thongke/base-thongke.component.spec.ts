import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseThongkeComponent } from './base-thongke.component';

describe('BaseThongkeComponent', () => {
  let component: BaseThongkeComponent;
  let fixture: ComponentFixture<BaseThongkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseThongkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseThongkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

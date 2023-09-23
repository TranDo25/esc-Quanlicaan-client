import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongBanAddEditComponent } from './phong-ban-add-edit.component';

describe('PhongBanAddEditComponent', () => {
  let component: PhongBanAddEditComponent;
  let fixture: ComponentFixture<PhongBanAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongBanAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongBanAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThongketheongayComponent } from './item-thongketheongay.component';

describe('ItemThongketheongayComponent', () => {
  let component: ItemThongketheongayComponent;
  let fixture: ComponentFixture<ItemThongketheongayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemThongketheongayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemThongketheongayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

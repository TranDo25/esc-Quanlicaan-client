import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThongketheothangComponent } from './item-thongketheothang.component';

describe('ItemThongketheothangComponent', () => {
  let component: ItemThongketheothangComponent;
  let fixture: ComponentFixture<ItemThongketheothangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemThongketheothangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemThongketheothangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

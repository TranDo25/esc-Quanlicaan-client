import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThongkecanhanComponent } from './item-thongkecanhan.component';

describe('ItemThongkecanhanComponent', () => {
  let component: ItemThongkecanhanComponent;
  let fixture: ComponentFixture<ItemThongkecanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemThongkecanhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemThongkecanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

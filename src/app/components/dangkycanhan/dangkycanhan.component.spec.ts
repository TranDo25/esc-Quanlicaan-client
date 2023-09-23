import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkycanhanComponent } from './dangkycanhan.component';

describe('DangkycanhanComponent', () => {
  let component: DangkycanhanComponent;
  let fixture: ComponentFixture<DangkycanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkycanhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangkycanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

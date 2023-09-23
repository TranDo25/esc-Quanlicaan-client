import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongketheongayComponent } from './thongketheongay.component';

describe('ThongketheongayComponent', () => {
  let component: ThongketheongayComponent;
  let fixture: ComponentFixture<ThongketheongayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongketheongayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongketheongayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

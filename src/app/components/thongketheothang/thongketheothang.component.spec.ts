import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongketheothangComponent } from './thongketheothang.component';

describe('ThongketheothangComponent', () => {
  let component: ThongketheothangComponent;
  let fixture: ComponentFixture<ThongketheothangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongketheothangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongketheothangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

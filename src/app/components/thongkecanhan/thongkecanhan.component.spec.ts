import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkecanhanComponent } from './thongkecanhan.component';

describe('ThongkecanhanComponent', () => {
  let component: ThongkecanhanComponent;
  let fixture: ComponentFixture<ThongkecanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongkecanhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongkecanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkytaptheComponent } from './dangkytapthe.component';

describe('DangkytaptheComponent', () => {
  let component: DangkytaptheComponent;
  let fixture: ComponentFixture<DangkytaptheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkytaptheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangkytaptheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

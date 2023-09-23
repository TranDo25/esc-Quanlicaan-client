import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberGroupComponent } from './input-number-group.component';

describe('InputNumberGroupComponent', () => {
  let component: InputNumberGroupComponent;
  let fixture: ComponentFixture<InputNumberGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

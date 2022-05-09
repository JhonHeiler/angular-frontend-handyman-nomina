import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHourWorkedComponent } from './form-hour-worked.component';

describe('FormHourWorkedComponent', () => {
  let component: FormHourWorkedComponent;
  let fixture: ComponentFixture<FormHourWorkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHourWorkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHourWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

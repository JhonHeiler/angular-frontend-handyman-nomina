import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourWorkedComponent } from './hour-worked.component';

describe('HourWorkedComponent', () => {
  let component: HourWorkedComponent;
  let fixture: ComponentFixture<HourWorkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourWorkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockLoginComponent } from './timeclock-login.component';

describe('TimeclockLoginComponent', () => {
  let component: TimeclockLoginComponent;
  let fixture: ComponentFixture<TimeclockLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

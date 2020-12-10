import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockDashboardComponent } from './timeclock-dashboard.component';

describe('TimeclockDashboardComponent', () => {
  let component: TimeclockDashboardComponent;
  let fixture: ComponentFixture<TimeclockDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeclockDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivatedDevicesComponent } from './list-activated-devices.component';

describe('ListActivatedDevicesComponent', () => {
  let component: ListActivatedDevicesComponent;
  let fixture: ComponentFixture<ListActivatedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActivatedDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivatedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

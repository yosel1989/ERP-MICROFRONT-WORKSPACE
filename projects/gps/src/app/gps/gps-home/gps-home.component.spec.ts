import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsHomeComponent } from './gps-home.component';

describe('GpsHomeComponent', () => {
  let component: GpsHomeComponent;
  let fixture: ComponentFixture<GpsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

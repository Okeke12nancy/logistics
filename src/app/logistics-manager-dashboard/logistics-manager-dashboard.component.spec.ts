import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsManagerDashboardComponent } from './logistics-manager-dashboard.component';

describe('LogisticsManagerDashboardComponent', () => {
  let component: LogisticsManagerDashboardComponent;
  let fixture: ComponentFixture<LogisticsManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsManagerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

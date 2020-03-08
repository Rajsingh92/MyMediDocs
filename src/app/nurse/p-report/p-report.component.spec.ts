import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PReportComponent } from './p-report.component';

describe('PReportComponent', () => {
  let component: PReportComponent;
  let fixture: ComponentFixture<PReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

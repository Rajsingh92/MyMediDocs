import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsReportsComponent } from './tests-reports.component';

describe('TestsReportsComponent', () => {
  let component: TestsReportsComponent;
  let fixture: ComponentFixture<TestsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

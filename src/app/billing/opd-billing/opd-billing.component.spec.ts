import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdBillingComponent } from './opd-billing.component';

describe('OpdBillingComponent', () => {
  let component: OpdBillingComponent;
  let fixture: ComponentFixture<OpdBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

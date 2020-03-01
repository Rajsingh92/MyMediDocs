import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdBillingComponent } from './ipd-billing.component';

describe('IpdBillingComponent', () => {
  let component: IpdBillingComponent;
  let fixture: ComponentFixture<IpdBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

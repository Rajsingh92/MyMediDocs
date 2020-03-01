import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowStocksComponent } from './below-stocks.component';

describe('BelowStocksComponent', () => {
  let component: BelowStocksComponent;
  let fixture: ComponentFixture<BelowStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

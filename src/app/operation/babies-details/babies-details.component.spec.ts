import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabiesDetailsComponent } from './babies-details.component';

describe('BabiesDetailsComponent', () => {
  let component: BabiesDetailsComponent;
  let fixture: ComponentFixture<BabiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

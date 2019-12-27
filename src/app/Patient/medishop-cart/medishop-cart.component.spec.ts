import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedishopCartComponent } from './medishop-cart.component';

describe('MedishopCartComponent', () => {
  let component: MedishopCartComponent;
  let fixture: ComponentFixture<MedishopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedishopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedishopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

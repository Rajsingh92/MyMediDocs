import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingToExpireComponent } from './going-to-expire.component';

describe('GoingToExpireComponent', () => {
  let component: GoingToExpireComponent;
  let fixture: ComponentFixture<GoingToExpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingToExpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingToExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

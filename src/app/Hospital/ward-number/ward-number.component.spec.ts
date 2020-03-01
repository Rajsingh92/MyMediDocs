import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardNumberComponent } from './ward-number.component';

describe('WardNumberComponent', () => {
  let component: WardNumberComponent;
  let fixture: ComponentFixture<WardNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

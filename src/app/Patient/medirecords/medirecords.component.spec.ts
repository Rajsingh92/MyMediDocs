import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedirecordsComponent } from './medirecords.component';

describe('MedirecordsComponent', () => {
  let component: MedirecordsComponent;
  let fixture: ComponentFixture<MedirecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedirecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedirecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

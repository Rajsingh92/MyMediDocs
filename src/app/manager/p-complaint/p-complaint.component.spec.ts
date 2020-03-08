import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PComplaintComponent } from './p-complaint.component';

describe('PComplaintComponent', () => {
  let component: PComplaintComponent;
  let fixture: ComponentFixture<PComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

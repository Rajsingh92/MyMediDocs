import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatchDetailsComponent } from './add-batch-details.component';

describe('AddBatchDetailsComponent', () => {
  let component: AddBatchDetailsComponent;
  let fixture: ComponentFixture<AddBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

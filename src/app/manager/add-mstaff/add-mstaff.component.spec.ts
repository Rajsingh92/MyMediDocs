import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMstaffComponent } from './add-mstaff.component';

describe('AddMstaffComponent', () => {
  let component: AddMstaffComponent;
  let fixture: ComponentFixture<AddMstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

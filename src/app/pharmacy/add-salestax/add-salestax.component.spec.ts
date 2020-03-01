import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalestaxComponent } from './add-salestax.component';

describe('AddSalestaxComponent', () => {
  let component: AddSalestaxComponent;
  let fixture: ComponentFixture<AddSalestaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalestaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalestaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecComponent } from './add-rec.component';

describe('AddRecComponent', () => {
  let component: AddRecComponent;
  let fixture: ComponentFixture<AddRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDruginfoComponent } from './add-druginfo.component';

describe('AddDruginfoComponent', () => {
  let component: AddDruginfoComponent;
  let fixture: ComponentFixture<AddDruginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDruginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDruginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

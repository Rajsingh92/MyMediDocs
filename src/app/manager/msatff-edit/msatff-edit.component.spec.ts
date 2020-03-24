import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsatffEditComponent } from './msatff-edit.component';

describe('MsatffEditComponent', () => {
  let component: MsatffEditComponent;
  let fixture: ComponentFixture<MsatffEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsatffEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsatffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

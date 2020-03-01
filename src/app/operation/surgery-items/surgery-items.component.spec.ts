import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryItemsComponent } from './surgery-items.component';

describe('SurgeryItemsComponent', () => {
  let component: SurgeryItemsComponent;
  let fixture: ComponentFixture<SurgeryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

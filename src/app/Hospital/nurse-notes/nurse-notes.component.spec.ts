import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseNotesComponent } from './nurse-notes.component';

describe('NurseNotesComponent', () => {
  let component: NurseNotesComponent;
  let fixture: ComponentFixture<NurseNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

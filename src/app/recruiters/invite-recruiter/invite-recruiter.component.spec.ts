import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteRecruiterComponent } from './invite-recruiter.component';

describe('InviteRecruiterComponent', () => {
  let component: InviteRecruiterComponent;
  let fixture: ComponentFixture<InviteRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

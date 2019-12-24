import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCounselorComponent } from './invite-counselor.component';

describe('InviteCounselorComponent', () => {
  let component: InviteCounselorComponent;
  let fixture: ComponentFixture<InviteCounselorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteCounselorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

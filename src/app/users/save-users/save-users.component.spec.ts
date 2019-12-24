import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUsersComponent } from './save-users.component';

describe('SaveUsersComponent', () => {
  let component: SaveUsersComponent;
  let fixture: ComponentFixture<SaveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

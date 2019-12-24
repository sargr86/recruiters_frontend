import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachTerritoriesComponent } from './attach-territories.component';

describe('AttachTerritoriesComponent', () => {
  let component: AttachTerritoriesComponent;
  let fixture: ComponentFixture<AttachTerritoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachTerritoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

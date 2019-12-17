import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachTerritoryComponent } from './attach-territory.component';

describe('AttachTerritoryComponent', () => {
  let component: AttachTerritoryComponent;
  let fixture: ComponentFixture<AttachTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

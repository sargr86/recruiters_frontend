import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTerritoriesComponent } from './show-territories.component';

describe('ShowTerritoriesComponent', () => {
  let component: ShowTerritoriesComponent;
  let fixture: ComponentFixture<ShowTerritoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTerritoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

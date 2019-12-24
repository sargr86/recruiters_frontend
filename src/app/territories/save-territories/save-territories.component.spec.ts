import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTerritoriesComponent } from './save-territories.component';

describe('SaveTerritoriesComponent', () => {
  let component: SaveTerritoriesComponent;
  let fixture: ComponentFixture<SaveTerritoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveTerritoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

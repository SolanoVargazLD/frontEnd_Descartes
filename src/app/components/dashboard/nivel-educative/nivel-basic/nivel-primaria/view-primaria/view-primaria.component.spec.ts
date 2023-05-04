import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrimariaComponent } from './view-primaria.component';

describe('ViewPrimariaComponent', () => {
  let component: ViewPrimariaComponent;
  let fixture: ComponentFixture<ViewPrimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrimariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBachilleratoComponent } from './view-bachillerato.component';

describe('ViewBachilleratoComponent', () => {
  let component: ViewBachilleratoComponent;
  let fixture: ComponentFixture<ViewBachilleratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBachilleratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBachilleratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

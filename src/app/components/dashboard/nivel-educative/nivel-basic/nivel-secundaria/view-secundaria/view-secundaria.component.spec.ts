import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecundariaComponent } from './view-secundaria.component';

describe('ViewSecundariaComponent', () => {
  let component: ViewSecundariaComponent;
  let fixture: ComponentFixture<ViewSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecundariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

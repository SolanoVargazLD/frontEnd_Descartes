import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdministrativeComponent } from './view-administrative.component';

describe('ViewAdministrativeComponent', () => {
  let component: ViewAdministrativeComponent;
  let fixture: ComponentFixture<ViewAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

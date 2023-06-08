import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenciatureComponent } from './view-licenciature.component';

describe('ViewLicenciatureComponent', () => {
  let component: ViewLicenciatureComponent;
  let fixture: ComponentFixture<ViewLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

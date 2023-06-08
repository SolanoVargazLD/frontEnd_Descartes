import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciatureComponent } from './licenciature.component';

describe('LicenciatureComponent', () => {
  let component: LicenciatureComponent;
  let fixture: ComponentFixture<LicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

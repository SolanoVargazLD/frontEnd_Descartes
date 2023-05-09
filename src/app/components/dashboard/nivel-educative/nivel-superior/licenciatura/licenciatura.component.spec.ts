import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciaturaComponent } from './licenciatura.component';

describe('LicenciaturaComponent', () => {
  let component: LicenciaturaComponent;
  let fixture: ComponentFixture<LicenciaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

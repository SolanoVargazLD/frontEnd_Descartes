import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirantLicenciatureComponent } from './aspirant-licenciature.component';

describe('AspirantLicenciatureComponent', () => {
  let component: AspirantLicenciatureComponent;
  let fixture: ComponentFixture<AspirantLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspirantLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspirantLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

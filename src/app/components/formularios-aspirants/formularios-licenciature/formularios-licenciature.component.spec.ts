import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosLicenciatureComponent } from './formularios-licenciature.component';

describe('FormulariosLicenciatureComponent', () => {
  let component: FormulariosLicenciatureComponent;
  let fixture: ComponentFixture<FormulariosLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLicenciatureComponent } from './select-licenciature.component';

describe('SelectLicenciatureComponent', () => {
  let component: SelectLicenciatureComponent;
  let fixture: ComponentFixture<SelectLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

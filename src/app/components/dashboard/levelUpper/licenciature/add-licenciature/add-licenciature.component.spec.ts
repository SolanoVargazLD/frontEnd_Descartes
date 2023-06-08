import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenciatureComponent } from './add-licenciature.component';

describe('AddLicenciatureComponent', () => {
  let component: AddLicenciatureComponent;
  let fixture: ComponentFixture<AddLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

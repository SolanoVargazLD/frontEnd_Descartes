import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAspirantLicenciatureComponent } from './edit-aspirant-licenciature.component';

describe('EditAspirantLicenciatureComponent', () => {
  let component: EditAspirantLicenciatureComponent;
  let fixture: ComponentFixture<EditAspirantLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAspirantLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAspirantLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

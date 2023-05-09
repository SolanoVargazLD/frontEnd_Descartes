import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature.component';

describe('ViewAspirantLicenciatureComponent', () => {
  let component: ViewAspirantLicenciatureComponent;
  let fixture: ComponentFixture<ViewAspirantLicenciatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirantLicenciatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirantLicenciatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministrativeComponent } from './add-administrative.component';

describe('AddAdministrativeComponent', () => {
  let component: AddAdministrativeComponent;
  let fixture: ComponentFixture<AddAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

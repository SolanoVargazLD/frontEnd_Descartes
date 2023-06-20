import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosAspirantsComponent } from './formularios-aspirants.component';

describe('FormulariosAspirantsComponent', () => {
  let component: FormulariosAspirantsComponent;
  let fixture: ComponentFixture<FormulariosAspirantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosAspirantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosAspirantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

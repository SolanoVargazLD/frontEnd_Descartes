import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBachillerComponent } from './formulario-bachiller.component';

describe('FormularioBachillerComponent', () => {
  let component: FormularioBachillerComponent;
  let fixture: ComponentFixture<FormularioBachillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBachillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBachillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

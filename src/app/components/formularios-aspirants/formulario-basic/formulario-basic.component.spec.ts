import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBasicComponent } from './formulario-basic.component';

describe('FormularioBasicComponent', () => {
  let component: FormularioBasicComponent;
  let fixture: ComponentFixture<FormularioBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

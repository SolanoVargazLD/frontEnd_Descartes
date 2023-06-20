import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosPosgradoComponent } from './formularios-posgrado.component';

describe('FormulariosPosgradoComponent', () => {
  let component: FormulariosPosgradoComponent;
  let fixture: ComponentFixture<FormulariosPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosPosgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

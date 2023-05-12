import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMaestriaDoctoradoComponent } from './select-maestria-doctorado.component';

describe('SelectMaestriaDoctoradoComponent', () => {
  let component: SelectMaestriaDoctoradoComponent;
  let fixture: ComponentFixture<SelectMaestriaDoctoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMaestriaDoctoradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMaestriaDoctoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

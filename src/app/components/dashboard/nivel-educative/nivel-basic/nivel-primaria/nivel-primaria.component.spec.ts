import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPrimariaComponent } from './nivel-primaria.component';

describe('NivelPrimariaComponent', () => {
  let component: NivelPrimariaComponent;
  let fixture: ComponentFixture<NivelPrimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelPrimariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelPrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

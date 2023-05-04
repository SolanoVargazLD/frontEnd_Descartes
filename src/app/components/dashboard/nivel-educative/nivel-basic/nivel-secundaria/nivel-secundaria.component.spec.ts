import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelSecundariaComponent } from './nivel-secundaria.component';

describe('NivelSecundariaComponent', () => {
  let component: NivelSecundariaComponent;
  let fixture: ComponentFixture<NivelSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelSecundariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

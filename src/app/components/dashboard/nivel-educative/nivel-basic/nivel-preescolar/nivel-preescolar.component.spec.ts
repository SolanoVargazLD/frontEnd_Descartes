import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPreescolarComponent } from './nivel-preescolar.component';

describe('NivelPreescolarComponent', () => {
  let component: NivelPreescolarComponent;
  let fixture: ComponentFixture<NivelPreescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelPreescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelPreescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

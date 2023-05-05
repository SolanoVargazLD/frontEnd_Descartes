import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelMediaComponent } from './nivel-media.component';

describe('NivelMediaComponent', () => {
  let component: NivelMediaComponent;
  let fixture: ComponentFixture<NivelMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

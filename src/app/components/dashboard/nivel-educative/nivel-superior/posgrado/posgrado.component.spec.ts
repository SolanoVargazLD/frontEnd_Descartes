import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgradoComponent } from './posgrado.component';

describe('PosgradoComponent', () => {
  let component: PosgradoComponent;
  let fixture: ComponentFixture<PosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

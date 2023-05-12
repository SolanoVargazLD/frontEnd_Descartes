import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPosgradoComponent } from './show-posgrado.component';

describe('ShowPosgradoComponent', () => {
  let component: ShowPosgradoComponent;
  let fixture: ComponentFixture<ShowPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPosgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

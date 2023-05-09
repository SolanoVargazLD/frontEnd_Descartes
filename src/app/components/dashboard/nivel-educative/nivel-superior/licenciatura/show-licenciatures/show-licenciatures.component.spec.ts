import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLicenciaturesComponent } from './show-licenciatures.component';

describe('ShowLicenciaturesComponent', () => {
  let component: ShowLicenciaturesComponent;
  let fixture: ComponentFixture<ShowLicenciaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLicenciaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLicenciaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

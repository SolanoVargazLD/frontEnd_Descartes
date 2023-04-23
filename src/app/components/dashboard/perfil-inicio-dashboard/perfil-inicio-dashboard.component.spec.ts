import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard.component';

describe('PerfilInicioDashboardComponent', () => {
  let component: PerfilInicioDashboardComponent;
  let fixture: ComponentFixture<PerfilInicioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInicioDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInicioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

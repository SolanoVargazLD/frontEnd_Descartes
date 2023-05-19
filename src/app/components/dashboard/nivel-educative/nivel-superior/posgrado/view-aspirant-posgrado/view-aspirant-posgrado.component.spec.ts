import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAspirantPosgradoComponent } from './view-aspirant-posgrado.component';

describe('ViewAspirantPosgradoComponent', () => {
  let component: ViewAspirantPosgradoComponent;
  let fixture: ComponentFixture<ViewAspirantPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirantPosgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirantPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

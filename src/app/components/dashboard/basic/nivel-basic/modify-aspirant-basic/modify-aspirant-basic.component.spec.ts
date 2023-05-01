import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAspirantBasicComponent } from './modify-aspirant-basic.component';

describe('ModifyAspirantBasicComponent', () => {
  let component: ModifyAspirantBasicComponent;
  let fixture: ComponentFixture<ModifyAspirantBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAspirantBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAspirantBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

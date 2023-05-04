import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAspirantComponent } from './modify-aspirant.component';

describe('ModifyAspirantComponent', () => {
  let component: ModifyAspirantComponent;
  let fixture: ComponentFixture<ModifyAspirantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAspirantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyAspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

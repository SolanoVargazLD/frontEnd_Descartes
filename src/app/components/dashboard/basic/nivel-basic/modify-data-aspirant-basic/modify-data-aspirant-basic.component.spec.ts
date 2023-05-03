import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDataAspirantBasicComponent } from './modify-data-aspirant-basic.component';

describe('ModifyDataAspirantBasicComponent', () => {
  let component: ModifyDataAspirantBasicComponent;
  let fixture: ComponentFixture<ModifyDataAspirantBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDataAspirantBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyDataAspirantBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

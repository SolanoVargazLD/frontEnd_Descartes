import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAspirantComponent } from './edit-aspirant.component';

describe('EditAspirantComponent', () => {
  let component: EditAspirantComponent;
  let fixture: ComponentFixture<EditAspirantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAspirantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

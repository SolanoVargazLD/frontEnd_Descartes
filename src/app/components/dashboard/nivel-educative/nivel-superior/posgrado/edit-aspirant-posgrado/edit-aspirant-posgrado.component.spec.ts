import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAspirantPosgradoComponent } from './edit-aspirant-posgrado.component';

describe('EditAspirantPosgradoComponent', () => {
  let component: EditAspirantPosgradoComponent;
  let fixture: ComponentFixture<EditAspirantPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAspirantPosgradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAspirantPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBachillerateComponent } from './edit-bachillerate.component';

describe('EditBachillerateComponent', () => {
  let component: EditBachillerateComponent;
  let fixture: ComponentFixture<EditBachillerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBachillerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBachillerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

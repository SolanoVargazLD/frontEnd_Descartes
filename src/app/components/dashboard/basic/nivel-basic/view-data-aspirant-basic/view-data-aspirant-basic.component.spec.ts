import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataAspirantBasicComponent } from './view-data-aspirant-basic.component';

describe('ViewDataAspirantBasicComponent', () => {
  let component: ViewDataAspirantBasicComponent;
  let fixture: ComponentFixture<ViewDataAspirantBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDataAspirantBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDataAspirantBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

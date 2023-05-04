import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAspirantComponent } from './view-aspirant.component';

describe('ViewAspirantComponent', () => {
  let component: ViewAspirantComponent;
  let fixture: ComponentFixture<ViewAspirantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

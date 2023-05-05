import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAspirantBachillerateComponent } from './view-aspirant-bachillerate.component';

describe('ViewAspirantBachillerateComponent', () => {
  let component: ViewAspirantBachillerateComponent;
  let fixture: ComponentFixture<ViewAspirantBachillerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirantBachillerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirantBachillerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

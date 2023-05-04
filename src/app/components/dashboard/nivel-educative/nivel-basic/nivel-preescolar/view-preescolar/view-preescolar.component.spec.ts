import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreescolarComponent } from './view-preescolar.component';

describe('ViewPreescolarComponent', () => {
  let component: ViewPreescolarComponent;
  let fixture: ComponentFixture<ViewPreescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPreescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPreescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

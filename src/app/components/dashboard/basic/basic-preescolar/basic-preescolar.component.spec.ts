import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPreescolarComponent } from './basic-preescolar.component';

describe('BasicPreescolarComponent', () => {
  let component: BasicPreescolarComponent;
  let fixture: ComponentFixture<BasicPreescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPreescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPreescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

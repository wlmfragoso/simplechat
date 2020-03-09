import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpOutGoingMsgComponent } from './cmp-out-going-msg.component';

describe('CmpOutGoingMsgComponent', () => {
  let component: CmpOutGoingMsgComponent;
  let fixture: ComponentFixture<CmpOutGoingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpOutGoingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpOutGoingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

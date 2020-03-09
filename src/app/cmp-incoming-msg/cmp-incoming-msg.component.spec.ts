import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpIncomingMsgComponent } from './cmp-incoming-msg.component';

describe('CmpIncomingMsgComponent', () => {
  let component: CmpIncomingMsgComponent;
  let fixture: ComponentFixture<CmpIncomingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpIncomingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpIncomingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

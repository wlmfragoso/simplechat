import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpChatViewComponent } from './cmp-chat-view.component';

describe('CmpChatViewComponent', () => {
  let component: CmpChatViewComponent;
  let fixture: ComponentFixture<CmpChatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpChatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

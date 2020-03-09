import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpOnlineUserComponent } from './cmp-online-user.component';

describe('CmpOnlineUserComponent', () => {
  let component: CmpOnlineUserComponent;
  let fixture: ComponentFixture<CmpOnlineUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpOnlineUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpOnlineUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

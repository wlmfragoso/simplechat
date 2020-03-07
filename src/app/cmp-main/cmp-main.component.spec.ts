import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpMainComponent } from './cmp-main.component';

describe('CmpMainComponent', () => {
  let component: CmpMainComponent;
  let fixture: ComponentFixture<CmpMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

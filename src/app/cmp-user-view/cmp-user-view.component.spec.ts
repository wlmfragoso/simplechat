import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpUserViewComponent } from './cmp-user-view.component';

describe('CmpUserViewComponent', () => {
  let component: CmpUserViewComponent;
  let fixture: ComponentFixture<CmpUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

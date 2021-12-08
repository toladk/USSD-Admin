import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableuserComponent } from './enableuser.component';

describe('EnableuserComponent', () => {
  let component: EnableuserComponent;
  let fixture: ComponentFixture<EnableuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnableuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

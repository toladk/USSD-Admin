import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssdlimitComponent } from './ussdlimit.component';

describe('UssdlimitComponent', () => {
  let component: UssdlimitComponent;
  let fixture: ComponentFixture<UssdlimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssdlimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssdlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

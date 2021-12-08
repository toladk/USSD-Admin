import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovepinComponent } from './approvepin.component';

describe('ApprovepinComponent', () => {
  let component: ApprovepinComponent;
  let fixture: ComponentFixture<ApprovepinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovepinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

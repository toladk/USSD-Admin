import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpinComponent } from './resetpin.component';

describe('ResetpinComponent', () => {
  let component: ResetpinComponent;
  let fixture: ComponentFixture<ResetpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

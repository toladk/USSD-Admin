import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitincreasereportComponent } from './limitincreasereport.component';

describe('LimitincreasereportComponent', () => {
  let component: LimitincreasereportComponent;
  let fixture: ComponentFixture<LimitincreasereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitincreasereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitincreasereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

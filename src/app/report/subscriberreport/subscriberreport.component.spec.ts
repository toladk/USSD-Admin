import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberreportComponent } from './subscriberreport.component';

describe('SubscriberreportComponent', () => {
  let component: SubscriberreportComponent;
  let fixture: ComponentFixture<SubscriberreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

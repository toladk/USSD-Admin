import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpaymentreportComponent } from './billpaymentreport.component';

describe('BillpaymentreportComponent', () => {
  let component: BillpaymentreportComponent;
  let fixture: ComponentFixture<BillpaymentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillpaymentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillpaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

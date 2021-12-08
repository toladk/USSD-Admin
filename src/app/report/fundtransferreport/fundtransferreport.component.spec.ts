import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtransferreportComponent } from './fundtransferreport.component';

describe('FundtransferreportComponent', () => {
  let component: FundtransferreportComponent;
  let fixture: ComponentFixture<FundtransferreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundtransferreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtransferreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

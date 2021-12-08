import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsheetComponent } from './reportsheet.component';

describe('ReportsheetComponent', () => {
  let component: ReportsheetComponent;
  let fixture: ComponentFixture<ReportsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

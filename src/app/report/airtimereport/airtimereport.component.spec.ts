import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimereportComponent } from './airtimereport.component';

describe('AirtimereportComponent', () => {
  let component: AirtimereportComponent;
  let fixture: ComponentFixture<AirtimereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

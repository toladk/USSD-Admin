import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveussdComponent } from './approveussd.component';

describe('ApproveussdComponent', () => {
  let component: ApproveussdComponent;
  let fixture: ComponentFixture<ApproveussdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveussdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveussdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

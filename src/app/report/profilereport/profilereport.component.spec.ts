import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilereportComponent } from './profilereport.component';

describe('ProfilereportComponent', () => {
  let component: ProfilereportComponent;
  let fixture: ComponentFixture<ProfilereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

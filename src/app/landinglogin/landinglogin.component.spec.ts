import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingloginComponent } from './landinglogin.component';

describe('LandingloginComponent', () => {
  let component: LandingloginComponent;
  let fixture: ComponentFixture<LandingloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

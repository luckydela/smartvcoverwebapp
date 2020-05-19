import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldpoliciesComponent } from './soldpolicies.component';

describe('SoldpoliciesComponent', () => {
  let component: SoldpoliciesComponent;
  let fixture: ComponentFixture<SoldpoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldpoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

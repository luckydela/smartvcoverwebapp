import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeaclaimComponent } from './makeaclaim.component';

describe('MakeaclaimComponent', () => {
  let component: MakeaclaimComponent;
  let fixture: ComponentFixture<MakeaclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeaclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeaclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

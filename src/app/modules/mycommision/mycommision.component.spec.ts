import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommisionComponent } from './mycommision.component';

describe('MycommisionComponent', () => {
  let component: MycommisionComponent;
  let fixture: ComponentFixture<MycommisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycommisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

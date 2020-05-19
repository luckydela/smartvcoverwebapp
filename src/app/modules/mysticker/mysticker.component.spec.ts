import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystickerComponent } from './mysticker.component';

describe('MystickerComponent', () => {
  let component: MystickerComponent;
  let fixture: ComponentFixture<MystickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

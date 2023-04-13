import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconBaseDefaultComponent } from './button-icon-base-default.component';

describe('ButtonIconBaseDefaultComponent', () => {
  let component: ButtonIconBaseDefaultComponent;
  let fixture: ComponentFixture<ButtonIconBaseDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconBaseDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIconBaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

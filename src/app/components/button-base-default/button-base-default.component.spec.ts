import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBaseDefaultComponent } from './button-base-default.component';

describe('ButtonBaseDefaultComponent', () => {
  let component: ButtonBaseDefaultComponent;
  let fixture: ComponentFixture<ButtonBaseDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBaseDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

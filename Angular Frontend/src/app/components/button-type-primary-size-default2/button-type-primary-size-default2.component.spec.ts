import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTypePrimarySizeDefault2Component } from './button-type-primary-size-default2.component';

describe('ButtonTypePrimarySizeDefault2Component', () => {
  let component: ButtonTypePrimarySizeDefault2Component;
  let fixture: ComponentFixture<ButtonTypePrimarySizeDefault2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTypePrimarySizeDefault2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTypePrimarySizeDefault2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

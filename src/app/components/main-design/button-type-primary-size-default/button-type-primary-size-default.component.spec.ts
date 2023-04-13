import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTypePrimarySizeDefaultComponent } from './button-type-primary-size-default.component';

describe('ButtonTypePrimarySizeDefaultComponent', () => {
  let component: ButtonTypePrimarySizeDefaultComponent;
  let fixture: ComponentFixture<ButtonTypePrimarySizeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTypePrimarySizeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTypePrimarySizeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

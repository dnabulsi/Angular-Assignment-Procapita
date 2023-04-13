import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstyleRegularPaddingSquare3Component } from './iconstyle-regular-padding-square3.component';

describe('IconstyleRegularPaddingSquare3Component', () => {
  let component: IconstyleRegularPaddingSquare3Component;
  let fixture: ComponentFixture<IconstyleRegularPaddingSquare3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconstyleRegularPaddingSquare3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconstyleRegularPaddingSquare3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

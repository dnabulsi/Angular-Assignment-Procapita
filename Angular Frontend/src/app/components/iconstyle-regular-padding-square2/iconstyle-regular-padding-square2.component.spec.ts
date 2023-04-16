import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstyleRegularPaddingSquare2Component } from './iconstyle-regular-padding-square2.component';

describe('IconstyleRegularPaddingSquare2Component', () => {
  let component: IconstyleRegularPaddingSquare2Component;
  let fixture: ComponentFixture<IconstyleRegularPaddingSquare2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconstyleRegularPaddingSquare2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconstyleRegularPaddingSquare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

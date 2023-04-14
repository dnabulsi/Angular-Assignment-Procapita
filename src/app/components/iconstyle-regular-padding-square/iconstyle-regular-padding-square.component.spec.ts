import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstyleRegularPaddingSquareComponent } from './iconstyle-regular-padding-square.component';

describe('IconstyleRegularPaddingSquareComponent', () => {
  let component: IconstyleRegularPaddingSquareComponent;
  let fixture: ComponentFixture<IconstyleRegularPaddingSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconstyleRegularPaddingSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconstyleRegularPaddingSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

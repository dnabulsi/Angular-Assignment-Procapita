import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstyleSolidPaddingSquareComponent } from './iconstyle-solid-padding-square.component';

describe('IconstyleSolidPaddingSquareComponent', () => {
  let component: IconstyleSolidPaddingSquareComponent;
  let fixture: ComponentFixture<IconstyleSolidPaddingSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconstyleSolidPaddingSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconstyleSolidPaddingSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconstyleRegularPaddingNoneComponent } from './iconstyle-regular-padding-none.component';

describe('IconstyleRegularPaddingNoneComponent', () => {
  let component: IconstyleRegularPaddingNoneComponent;
  let fixture: ComponentFixture<IconstyleRegularPaddingNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconstyleRegularPaddingNoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconstyleRegularPaddingNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

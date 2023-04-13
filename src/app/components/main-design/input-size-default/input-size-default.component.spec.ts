import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSizeDefaultComponent } from './input-size-default.component';

describe('InputSizeDefaultComponent', () => {
  let component: InputSizeDefaultComponent;
  let fixture: ComponentFixture<InputSizeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSizeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSizeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

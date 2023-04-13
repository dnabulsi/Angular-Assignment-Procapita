import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerTypeHorizontalSpacedComponent } from './divider-type-horizontal-spaced.component';

describe('DividerTypeHorizontalSpacedComponent', () => {
  let component: DividerTypeHorizontalSpacedComponent;
  let fixture: ComponentFixture<DividerTypeHorizontalSpacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerTypeHorizontalSpacedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerTypeHorizontalSpacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

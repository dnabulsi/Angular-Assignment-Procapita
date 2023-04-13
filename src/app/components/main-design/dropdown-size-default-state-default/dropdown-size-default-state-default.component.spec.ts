import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSizeDefaultStateDefaultComponent } from './dropdown-size-default-state-default.component';

describe('DropdownSizeDefaultStateDefaultComponent', () => {
  let component: DropdownSizeDefaultStateDefaultComponent;
  let fixture: ComponentFixture<DropdownSizeDefaultStateDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSizeDefaultStateDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSizeDefaultStateDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

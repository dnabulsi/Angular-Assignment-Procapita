import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEntityDropdownComponent } from './legal-entity-dropdown.component';

describe('LegalEntityDropdownComponent', () => {
  let component: LegalEntityDropdownComponent;
  let fixture: ComponentFixture<LegalEntityDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalEntityDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalEntityDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

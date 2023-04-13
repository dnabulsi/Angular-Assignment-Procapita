import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentItemTemplateStateOpenComponent } from './assessment-item-template-state-open.component';

describe('AssessmentItemTemplateStateOpenComponent', () => {
  let component: AssessmentItemTemplateStateOpenComponent;
  let fixture: ComponentFixture<AssessmentItemTemplateStateOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentItemTemplateStateOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentItemTemplateStateOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

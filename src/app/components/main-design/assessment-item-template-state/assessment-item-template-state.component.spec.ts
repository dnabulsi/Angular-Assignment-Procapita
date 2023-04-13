import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentItemTemplateStateComponent } from './assessment-item-template-state.component';

describe('AssessmentItemTemplateStateComponent', () => {
  let component: AssessmentItemTemplateStateComponent;
  let fixture: ComponentFixture<AssessmentItemTemplateStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentItemTemplateStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentItemTemplateStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

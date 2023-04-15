import { Component, OnInit } from '@angular/core';
import { Assessment } from 'src/app/models/assessment';
import { AssessmentService } from 'src/services/assessment.service';

@Component({
  selector: 'app-assessment-item-template-state',
  templateUrl: './assessment-item-template-state.component.html',
  styleUrls: ['./assessment-item-template-state.component.css']
})
export class AssessmentItemTemplateStateComponent implements OnInit {
  assessments: Assessment[] = [];
  constructor(
    private assessmentService: AssessmentService,
  ) { }

  ngOnInit(): void {
    this.assessmentService.getAssessments().subscribe((result: Assessment[]) => (this.assessments = result));
  }
}

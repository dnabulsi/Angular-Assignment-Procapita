import { Component, OnInit } from '@angular/core';
import { Assessment } from './models/assessment';
import { AssessmentService } from 'src/services/assessment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Assessment.UI"
  assessments: Assessment[] = [];

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
    this.assessmentService
      .getAssessments()
      .subscribe((result: Assessment[]) => (this.assessments = result));

  }
}
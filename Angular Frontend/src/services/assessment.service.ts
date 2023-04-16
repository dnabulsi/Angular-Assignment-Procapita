import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Assessment } from 'src/app/models/assessment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private url = "Assessments";

  constructor(private http: HttpClient) { }

  public getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${environment.apiUrl}/${this.url}`);
  }
}

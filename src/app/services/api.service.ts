import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Opportunity, OpportunityEdit } from '../model/opportunity'
import { Lead, LeadEdit } from '../model/lead'
import { GeneralResponse } from '../model/general-response';
import { LeeTask } from '../model/lee-task';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private authService: AuthService) { }


  getOpportunities(): Observable<Opportunity[]> {
    return this.http.post<Opportunity[]>(environment.urls.opportunities, { 'email': this.authService.userEmail }).pipe(catchError(this.handleError.bind(this)));
  }
  updateOpportunity(dataToUpdate: OpportunityEdit): Observable<GeneralResponse> {
    dataToUpdate.email = this.authService.userEmail;
    return this.http.post<GeneralResponse>(
      environment.urls.updateOpportunity,
      dataToUpdate
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getLeads(): Observable<Lead[]> {
    return this.http.post<Lead[]>(environment.urls.leads, { 'email': this.authService.userEmail }).pipe(catchError(this.handleError.bind(this)));
  }

  updateLead(dataToUpdate: LeadEdit): Observable<GeneralResponse> {
    dataToUpdate.email = this.authService.userEmail;
    return this.http.post<GeneralResponse>(
      environment.urls.updateLead,
      dataToUpdate
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  /**
     *
     * @param id id of Opportunity or Lead
     *
     * @return  An `Observable` of the `LeeTask[]`
     */
  getTasks(id: string): Observable<LeeTask[]> {
    return this.http.post<Lead[]>(environment.urls.tasks, { 'Id': id }).pipe(catchError(this.handleError.bind(this)));
  }

  /**
     *
     * @param id id of Opportunity or Lead
     *
     * @return  An `Observable` of the `GeneralResponse`
     */
  createTask(id: string, task: LeeTask): Observable<GeneralResponse> {
    return this.http.post<Lead[]>(environment.urls.createTask, { 'Id': id, data: task }).pipe(catchError(this.handleError.bind(this)));
  }

  /**
     *
     * @param id id of Opportunity or Lead
     *
     * @return  An `Observable` of the `GeneralResponse`
     */
  updateTask(id: string, task: LeeTask): Observable<GeneralResponse> {
    return this.http.post<Lead[]>(environment.urls.updateTask, { 'Id': id, data: task }).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(httpErrorResponse: HttpErrorResponse) {
    return throwError(httpErrorResponse);
  }

}
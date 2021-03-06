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
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private authService: AuthService) { }


  getOpportunities(): Observable<Opportunity[]> {
    return this.http.post<Opportunity[]>(environment.urls.opportunities, { 'email': this.authService.userEmail }).pipe(catchError(this.handleError.bind(this)));
  }

  getOpportunity(opportunityId: string): Observable<Opportunity[]> {
    return this.http.post<Opportunity[]>(environment.urls.getOpportunity,
      {
        'email': this.authService.userEmail,
        'opportunityId': opportunityId
      }
    )
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  updateOpportunity(data: Opportunity, opportunityId: string): Observable<GeneralResponse> {
    let editObj: OpportunityEdit = {
      email: this.authService.userEmail, 
      opportunityId: opportunityId,
      data: data
    } as OpportunityEdit;

    return this.http.post<GeneralResponse>(
      environment.urls.updateOpportunity,
      editObj
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getLeads(): Observable<Lead[]> {
    return this.http.post<Lead[]>(environment.urls.leads, { 'email': this.authService.userEmail }).pipe(catchError(this.handleError.bind(this)));
  }

  getLead(leadId: string): Observable<Lead[]> {
    return this.http.post<Lead[]>(environment.urls.getlead,
      {
        'email': this.authService.userEmail,
        'LeadId': leadId
      }
    )
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  updateLead(data: Lead, leadId: string): Observable<GeneralResponse> {
    let editObj: LeadEdit = {
      email: this.authService.userEmail,
      leadId: leadId,
      data: data
    } as LeadEdit;

    return this.http.post<GeneralResponse>(
      environment.urls.updateLead,
      editObj
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
  createTask(whoId: string, task: LeeTask): Observable<GeneralResponse> {
    return this.http.post<Lead[]>(environment.urls.createTask, { 'Id': whoId, data: task }).pipe(catchError(this.handleError.bind(this)));
  }

  /**
     *
     * @param id id of Opportunity or Lead
     *
     * @return  An `Observable` of the `GeneralResponse`
     */
  updateTask(taskId: string, task: LeeTask): Observable<GeneralResponse> {
    return this.http.post<Lead[]>(environment.urls.updateTask, { 'Id': taskId, data: task }).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(httpErrorResponse: HttpErrorResponse) {
    this.messageService.add({ severity: 'error', summary: httpErrorResponse.statusText });
    return throwError(httpErrorResponse);
  }

}
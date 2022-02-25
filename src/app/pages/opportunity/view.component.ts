import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { LeeTask } from '../../model/lee-task';
import { Opportunity } from '../../model/opportunity';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-lead-view',
	templateUrl: './view.component.html'
})
export class OpportunityViewComponent implements OnInit {
	selectedOpportunity: Opportunity;
	opportunityId: string;	
	loading: boolean=true;
	tasks: LeeTask[]=[];

	constructor(private confirmationService: ConfirmationService,
		private router: Router,
		private route: ActivatedRoute,
		private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.opportunityId = this.route.snapshot.paramMap.get('id');
		
		let opSubscription=this.apiService.getOpportunity(this.opportunityId).subscribe(result=>{
			this.selectedOpportunity=result[0];
			this.loading=false;
			opSubscription.unsubscribe();
			this.listTasks(this.selectedOpportunity.OpportunityID);
		});

	}

	listTasks(leadId){
		let taskSubscription=this.apiService.getTasks(leadId).subscribe(result=>{
			this.tasks=result;
			taskSubscription.unsubscribe();
		});
	}

}

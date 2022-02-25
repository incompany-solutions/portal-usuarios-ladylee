import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeTemplate } from 'primeng/api';

import { Opportunity, OpportunityEdit } from '../../model/opportunity';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-opportunity',
	templateUrl: './opportunity.component.html',
	styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

	opportunities: Opportunity[] = [];
	editDialog: boolean = false;
	viewDialog: boolean = false;
	loading: boolean = false;
	selectedOpportunity: Opportunity;
	editedOpportunity: Opportunity;
	updating: boolean = false;

	constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private apiService: ApiService) {

	}

	ngOnInit() {
		this.list();
	}

	list() {
		this.loading = true;
		let opportunitySubscription = this.apiService.getOpportunities().subscribe(
			(response) => {
				this.opportunities = response;
				this.loading = false;
				opportunitySubscription.unsubscribe();
			}
		);
	}



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Lead, LeadEdit } from '../../model/lead';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-lead-view',
	templateUrl: './view.component.html'
})
export class LeadViewComponent implements OnInit {
	selectedLead: Lead;
	editModel: Lead;
	leadId: string;	
	loading: boolean=true;

	constructor(private confirmationService: ConfirmationService,
		private router: Router,
		private route: ActivatedRoute,
		private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.leadId = this.route.snapshot.paramMap.get('id');
		console.log(this.leadId);
		
		let leadSubscription=this.apiService.getLead(this.leadId).subscribe(result=>{
			this.selectedLead=result[0];
			this.loading=false;
			leadSubscription.unsubscribe();
			console.log("RefFamiliarNoResponde", this.selectedLead.RefFamiliarNoResponde);
		});

		this.editModel = {} as Lead;
	}

}

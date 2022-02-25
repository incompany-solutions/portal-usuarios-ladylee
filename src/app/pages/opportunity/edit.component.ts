import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Opportunity } from '../../model/opportunity';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-lead-edit',
	templateUrl: './edit.component.html'
})
export class OpportunityEditComponent implements OnInit {
	selectedOpportunity: Opportunity;
	editModel: Opportunity;
	opportunityId: string;
	loading: boolean = true;
	saving: boolean = false;

	constructor(private confirmationService: ConfirmationService,
		private router: Router,
		private route: ActivatedRoute,
		private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.opportunityId = this.route.snapshot.paramMap.get('id');

		let opSubscription = this.apiService.getOpportunity(this.opportunityId).subscribe(result => {
			this.selectedOpportunity = result[0];
			this.loading = false;
			opSubscription.unsubscribe();
		}, error=>{
			this.loading = false;
		});

		this.editModel = {} as Opportunity;
	}

	handleChange($event: Event) {
		let el = $event.target as HTMLInputElement;
		let elVal = el.value;
		if (el.type == 'checkbox') {
			elVal = el.checked ? 'true' : 'false';
		}

		if (this.selectedOpportunity[el.id] != elVal) {
			this.editModel[el.id] = elVal;
		} else {
			delete this.editModel[el.id];
		}


	}


	save() {
		if (Object.keys(this.editModel).length == 0) {
			this.messageService.add({ severity: 'warn', summary: 'no tienes cambios' });
			return;
		}

		this.saving = true;

		this.apiService.updateOpportunity(this.editModel, this.selectedOpportunity.OpportunityID).subscribe((response) => {
			if (response.status == 'Ok') {
				this.messageService.add({ severity: 'success', summary: 'Actualizar cotizacion potencial es exitoso' });
				this.saving = false;
				Object.keys(this.editModel).forEach((key: string) => {
					this.selectedOpportunity[key] = this.editModel[key];
				});

				this.editModel = {} as Opportunity;
			}
			else {
				this.messageService.add({ severity: 'error', summary: 'Hay un error durante la actualización.' });
			}
		}, error => {
			this.saving = false;
		})



	}


	back(): void {
		this.router.navigate(['viewopportunity', this.selectedOpportunity.OpportunityID]);
	}

}

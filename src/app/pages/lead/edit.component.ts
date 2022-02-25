import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Lead, LeadEdit } from '../../model/lead';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-lead-edit',
	templateUrl: './edit.component.html'
})
export class LeadEditComponent implements OnInit {
	selectedLead: Lead;
	editModel: Lead;
	leadId: string;
	loading: boolean = true;
	saving: boolean = false;

	constructor(private confirmationService: ConfirmationService,
		private router: Router,
		private route: ActivatedRoute,
		private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.leadId = this.route.snapshot.paramMap.get('id');

		let leadSubscription = this.apiService.getLead(this.leadId).subscribe(result => {
			this.selectedLead = result[0];
			this.loading = false;
			leadSubscription.unsubscribe();
		});

		this.editModel = {} as Lead;
	}

	handleChange($event: Event) {
		let el = $event.target as HTMLInputElement;
		let elVal = el.value;
		if (el.type == 'checkbox') {
			elVal = el.checked ? 'true' : 'false';
		}

		if (this.selectedLead[el.id] != elVal) {
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

		this.apiService.updateLead(this.editModel, this.selectedLead.LeadID).subscribe((response) => {
			if (response.status == 'Ok') {
				this.messageService.add({ severity: 'success', summary: 'Actualizar prospecto potencial es exitoso' });
				this.saving = false;
				Object.keys(this.editModel).forEach((key: string) => {
					this.selectedLead[key] = this.editModel[key];
				});

				this.editModel = {} as Lead;
			}
			else {
				this.messageService.add({ severity: 'error', summary: 'Hay un error durante la actualización.' });
			}
		}, error => {
			this.saving = false;
		})



	}


	back(): void {
		this.router.navigate(['viewlead', this.selectedLead.LeadID]);
	}

}

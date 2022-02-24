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


	edit() {
		this.editedOpportunity = {
			Name: this.selectedOpportunity.Name,
			CloseDate: this.selectedOpportunity.CloseDate,
			OpportunityID: this.selectedOpportunity.OpportunityID
		} as Opportunity;

		this.editDialog = true;
		this.viewDialog = false;
	}

	view($opportunity) {
		this.selectedOpportunity = $opportunity;
		this.viewDialog = true;
	}



	hideEditDialog() {
		this.editDialog = false;
		this.viewDialog = true;
	}

	save() {

		let editModel: OpportunityEdit = {
			data: {
				Name: this.editedOpportunity.Name,
				Close_Date: this.editedOpportunity.CloseDate
			},
			opportunityId: this.editedOpportunity.OpportunityID
		}
		this.updating = true;
		this.apiService.updateOpportunity(editModel).subscribe((response) => {
			if (response.status == 'Ok') {
				this.selectedOpportunity.Name = this.editedOpportunity.Name;
				this.selectedOpportunity.CloseDate = this.editedOpportunity.CloseDate;
				this.editDialog = false;
				this.viewDialog = true;
				this.messageService.add({ severity: 'success', summary: 'Update opportunity is successful' });
			}
			else {
				this.messageService.add({ severity: 'error', summary: 'There is an error during update' });
			}
			this.updating = false;
		})

	}

	/* 
		deleteSelectedProducts() {
			this.confirmationService.confirm({
				message: 'Are you sure you want to delete the selected products?',
				header: 'Confirm',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					this.countries = this.countries.filter(val => !this.selectedCountries.includes(val));
					this.selectedCountries = null;
					this.messageService.add({
						severity: 'success',
						summary: 'Successful',
						detail: 'Products Deleted',
						life: 3000
					});
				}
			});
		}
	
		editProduct(country: Lookup) {
			this.country = { ...country };
			this.countryDialog = true;
		}
	
		deleteProduct(country: Lookup) {
			this.confirmationService.confirm({
				message: 'Are you sure you want to delete ' + country.NameEn + '?',
				header: 'Confirm',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					country.StatusId = LookupEnum.Status_Deleted;
					this.lookupService.saveLookup(country).subscribe((res: any) => {
						this.listCountries();
						this.messageService.add({
							severity: 'success',
							summary: 'Successful',
							detail: 'Country Deleted',
							life: 3000
						});
					});
				}
			});
		}
	
		saveLookup() {
			this.submitted = true;
			if (!this.country.NameEn || !this.country.NameAr || !this.country.CountryCode || !this.country.PhoneCode || !this.country.Timezone) {
				return;
			}
			let _that = this;
			if (this.countries.filter(c => (c.NameEn == _that.country.NameEn || c.NameAr == _that.country.NameAr
				|| c.CountryCode == _that.country.CountryCode || c.PhoneCode == _that.country.PhoneCode)
				&& c.Id != (_that.country.Id || -1)).length > 0) {
				this.messageService.add({
					severity: 'error',
					summary: 'Same Record Found!',
					detail: 'Country Name, Arabic Name, Country Code or Phone Code are already added.',
					life: 3000
				});
				return;
			}
	
			if (this.country.NameEn.trim()) {
				if (this.country.Id) {
					this.countries[this.findIndexById(this.country.Id)] = this.country;
					this.lookupService.saveLookup(this.country).subscribe((res: any) => {
						this.listCountries();
						this.messageService.add({
							severity: 'success',
							summary: 'Successful',
							detail: 'Country Updated',
							life: 3000
						});
					});
	
				} else {
					this.country.LookupTypeId = LookupTypeEnum.Country;
					this.lookupService.saveLookup(this.country).subscribe((res: any) => {
						this.listCountries();
						this.messageService.add({
							severity: 'success',
							summary: 'Successful',
							detail: 'Country Created',
							life: 3000
						});
					});
				}
	
				this.countries = [...this.countries];
				this.countryDialog = false;
				this.country = null;
			}
		}
	 */

}

import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Lead, LeadEdit } from '../../model/lead';
import { ApiService } from '../../services/api.service';


@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	leads: Lead[] = [];
	editDialog: boolean= false;
	loading: boolean=false;

	viewDialog: boolean = false;
	selectedLead: Lead;
	editedLead: Lead;
	updating: boolean = false;

	constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.list();
	}


	list() {
		this.loading=true;
		let leadSubscription=this.apiService.getLeads().subscribe(result=>{
			this.leads=result;
			this.loading=false;
			leadSubscription.unsubscribe();
		});
	}
	
	
	
	edit() {
		this.editedLead = {
			LeadID:this.selectedLead.LeadID,
			Company:this.selectedLead.Company,
			Title: this.selectedLead.Title
		} as Lead;

		this.editDialog = true;
		this.viewDialog=false;
	}

	view($lead) {
		this.selectedLead = $lead;
		this.viewDialog = true;
	}



	hideEditDialog() {
		this.editDialog = false;
		this.viewDialog=true;
	}

/* 	save() {

		let editModel: LeadEdit = {
			data: {
				Company: this.editedLead.Company,
				Title: this.editedLead.Title
			},
			leadId: this.editedLead.LeadID
		}
		this.updating=true;
		this.apiService.updateLead(editModel).subscribe((response) => {
			if (response.status == 'Ok') {
				this.selectedLead.Company = this.editedLead.Company;
				this.selectedLead.Title = this.editedLead.Title;
				this.editDialog = false;
				this.viewDialog=true;
				this.messageService.add({ severity: 'success', summary:'Update lead is successful' });
			}
			else{
				this.messageService.add({ severity: 'error', summary:'There is an error during update' });
			}
			this.updating=false;
		})

	} */

	
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

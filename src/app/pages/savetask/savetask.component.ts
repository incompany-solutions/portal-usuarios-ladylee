import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LeeTask } from '../../model/lee-task';

import { ApiService } from '../../services/api.service';

import { Location } from '@angular/common'


@Component({
	selector: 'app-savetask',
	templateUrl: './savetask.component.html'
})
export class SaveTaskComponent implements OnInit {
	whoId: string; /* Lead ID pr Opportunity ID */
	taskId: string;
	loading: boolean = true;
	saving: boolean = false;
	task: LeeTask = {} as LeeTask;

	constructor(private confirmationService: ConfirmationService,
		private route: ActivatedRoute,
		private location: Location,
		private messageService: MessageService, private apiService: ApiService) {


	}

	ngOnInit() {
		this.whoId = this.route.snapshot.paramMap.get('whoid');
		this.taskId = this.route.snapshot.paramMap.get('taskid');

		if (!this.taskId) {
			this.loading = false;
		} else {
			let taskSubscription = this.apiService.getTasks(this.whoId).subscribe(result => {
				this.task = result.filter(t => t.Id == this.taskId)[0];
				taskSubscription.unsubscribe();
				this.loading = false;
			}, error => {
				this.loading = false;
			});
		}
	}

	back(): void {
		this.location.back();
	}

	save() {

		this.saving = true;
		if (this.task.Id) {
			//update

			this.apiService.updateTask(this.taskId, this.task).subscribe((response) => {
				if (response.status == 'Ok') {
					this.messageService.add({ severity: 'success', summary: 'Actualizar tarea es exitoso' });
				}
				else {
					this.messageService.add({ severity: 'error', summary: 'Hay un error durante la actualización.' });
				}
				this.saving = false;
			}, error => {
				this.saving = false;
			})

		}
		else {
			//create

			this.apiService.createTask(this.whoId, this.task).subscribe((response) => {
				if (response.status == 'Ok') {
					this.messageService.add({ severity: 'success', summary: 'Crear tarea es exitoso' });
					this.location.back();
				}
				else {
					this.messageService.add({ severity: 'error', summary: 'Hay un error durante la crear.' });
				}
				this.saving = false;
			}, error => {
				this.saving = false;
			})
		}

	}

}

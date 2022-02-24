import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { AppMainComponent } from '@app/components/main/app.main.component';
import { LoginComponent } from '@app/pages/login/login.component';

import { AuthGuard } from '@app/guards/auth.guard';

import { OpportunityComponent } from '../pages/opportunity/opportunity.component';
import { LeadComponent } from '../pages/lead/lead.component';
import { LeadViewComponent } from '../pages/lead/view.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LeadEditComponent } from '../pages/lead/edit.component';



@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppMainComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: '',
              redirectTo: 'leads',
              pathMatch: 'full'
            },
            {
              path: 'opportunities',
              component: OpportunityComponent,
              canActivate: [AuthGuard]
            },
            {
              path: 'leads',
              component: LeadComponent,
              canActivate: [AuthGuard]
            },
            {
              path: 'viewlead/:id',
              component: LeadViewComponent,
              canActivate: [AuthGuard]
            },
            {
              path: 'editlead/:id',
              component: LeadEditComponent,
              canActivate: [AuthGuard]
            },
            {
              path: 'contacts',
              component: ContactComponent,
              canActivate: [AuthGuard]
            }
          ],
        },
        {
          path: 'login',
          component: LoginComponent,
        },

        { path: '**', redirectTo: 'notfound' },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

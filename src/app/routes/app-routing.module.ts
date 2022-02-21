import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';

import { AppMainComponent } from '@app/components/main/app.main.component';
import { LoginComponent } from '@app/pages/login/login.component';

import { AuthGuard } from '@app/guards/auth.guard';

import { OpportunityComponent } from '../pages/opportunity/opportunity.component';
import { LeadComponent } from '../pages/lead/lead.component';
import { ContactComponent } from '../pages/contact/contact.component';



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
              path: 'opportunities',
              component: OpportunityComponent,
              canActivate: [AuthGuard]
            },
             {
              path: 'leads',
              component: LeadComponent,
              canActivate: [AuthGuard]
            } ,
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

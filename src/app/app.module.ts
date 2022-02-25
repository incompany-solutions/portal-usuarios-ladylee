import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';

import { AppCodeModule } from './components/code/app.code.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/main/app.main.component';
import { AppTopBarComponent } from './components/toolbar/app.topbar.component';
import { AppMenuComponent } from './components/menu/app.menu.component';
import { AppMenuitemComponent } from './components/menu/app.menuitem.component';

import { BreadcrumbService } from './services/app.breadcrumb.service';
import { MenuService } from './services/app.menu.service';
import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './pages/login/login.component';

import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthInterceptor } from './guards/auth.interceptor';

import { OpportunityComponent } from './pages/opportunity/opportunity.component';
import { LeadComponent } from './pages/lead/lead.component';
import { ContactComponent } from './pages/contact/contact.component';

import { LeadViewComponent } from './pages/lead/view.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { LeadEditComponent } from './pages/lead/edit.component';
import { SaveTaskComponent } from './pages/savetask/savetask.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    PaginatorModule,
    ProgressBarModule,
    RippleModule,
    ToastModule,
    TooltipModule,
    ProgressSpinnerModule,
    FontAwesomeModule,
    AppCodeModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    LoginComponent,
    OpportunityComponent,
    LeadComponent,
    ContactComponent,
    LeadViewComponent,
    LeadEditComponent,
    SaveTaskComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MenuService,
    BreadcrumbService,
    MessageService,
    ConfirmationService,
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector, private library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}

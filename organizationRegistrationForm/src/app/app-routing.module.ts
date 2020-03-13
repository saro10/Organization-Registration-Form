import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
{
path: '',
component: HeaderComponent,
children: [
  	{ path: 'company', component: CompanyDetailsComponent },
  	{ path: 'personal', component: PersonalDetailsComponent },
  	{ path: 'email', component: EmailVerificationComponent },
  	{ path: 'dashboard', component: DashboardComponent },
]
}
  	
];

@NgModule({
  	declarations: [],
  	imports: [
    	CommonModule,
    	RouterModule.forRoot(routes)	
  	],
  	exports: [RouterModule]
})
export class AppRoutingModule { }

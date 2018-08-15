import { StarterComponent } from './../starter/starter.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonelFormComponent } from '../starter/personel-list/personel-form/personel-form.component';
import { PersonelListComponent } from '../starter/personel-list/personel-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarterContentComponent } from '../starter/starter-content/starter-content.component';
import { AppComponent } from '../app.component';
import { AccueilComponent } from '../starter/accueil/accueil.component';
import { PersonelInformationComponent } from '../starter/personel-information/personel-information.component';
import { PersonalComponent } from '../starter/form2/personal/personal.component';
import { WorkComponent } from '../starter/form2/work/work.component';
import { AddressComponent } from '../starter/form2/address/address.component';
import { ResultComponent } from '../starter/form2/result/result.component';
import { WorkflowGuard } from '../starter/form2/workflow/workflow-guard.service';
import { NavbarComponent } from '../starter/form2/navbar/navbar.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AccueilComponent },
      { path: 'personel', component: PersonelListComponent},
      { path: 'not-found', component: NotFoundComponent},
      { path: 'ess', component: NavbarComponent},
      { path: 'starter', component: PersonelFormComponent},
      { path: 'information', component: PersonelInformationComponent},
      { path: 'personel/new/:id', component: PersonelFormComponent},
       // 1st Route
    { path: 'personal',  component: PersonalComponent },
    // 2nd Route
    { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    // { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    // 6th Route
    // { path: '**', component: PersonalComponent },
      { path: '**', redirectTo: '/not-found'}
      
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
  
})
export class AppRoutingModule {
  
 }

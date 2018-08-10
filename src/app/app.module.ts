import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { PersonelListComponent } from './starter/personel-list/personel-list.component';
import { PersonelFormComponent } from './starter/personel-list/personel-form/personel-form.component';
import { SinglePersonelComponent } from './starter/personel-list/single-personel/single-personel.component';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployesService } from './starter/services/employes.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './starter/accueil/accueil.component';
import { PersonelInformationComponent } from './starter/personel-information/personel-information.component';
import { More1InformationComponent } from './starter/more1-information/more1-information.component';
import { More2InformationComponent } from './starter/more2-information/more2-information.component';
import { More3InformationComponent } from './starter/more3-information/more3-information.component';
import { HttpClientModule } from '@angular/common/http';
import { Form2Component } from './starter/form2/form2.component';
import { DataComponent } from './starter/form2/data/data.component';
import { NavbarComponent } from './starter/form2/navbar/navbar.component';
import { PersonalComponent } from './starter/form2/personal/personal.component';
import { ResultComponent } from './starter/form2/result/result.component';
import { WorkComponent } from './starter/form2/work/work.component';
import { WorkflowComponent } from './starter/form2/workflow/workflow.component';
import { AddressComponent } from './starter/form2/address/address.component';
import { WorkflowGuard } from './starter/form2/workflow/workflow-guard.service';
import { FormDataService } from './starter/form2/data/formData.service';
import { WorkflowService } from './starter/form2/workflow/workflow.service';





// const appRoutes: Routes= [
//   { path: 'personel/new', component: PersonelFormComponent},
//   { path: '', redirectTo: 'personel/new', pathMatch: 'full' },
//   { path: '**', redirectTo: 'personel/new'}
  

// ];

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    PersonelListComponent,
    PersonelFormComponent,
    SinglePersonelComponent,
    NotFoundComponent,
    AccueilComponent,
    PersonelInformationComponent,
    More1InformationComponent,
    More2InformationComponent,
    More3InformationComponent,
    Form2Component,
    DataComponent,
    NavbarComponent,
    PersonalComponent,
    ResultComponent,
    WorkComponent,
    WorkflowComponent,
    AddressComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployesService, WorkflowService, WorkflowGuard,FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

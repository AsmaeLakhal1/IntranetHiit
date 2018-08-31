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
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployesService } from './starter/services/employes.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './starter/accueil/accueil.component';
import { PersonelInformationComponent } from './starter/personel-information/personel-information.component';
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
import { NewProjectComponent } from './starter/form2/new-project/new-project.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authService } from './starter/services/auth.service';
import { authGuardService } from './starter/services/auth-guard.service';
import { DataService } from './starter/services/data.service';
import { ComportementComponent } from './starter/comportement/comportement.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
// import { MatStepper } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { StatisticsComponent } from './starter/statistics/statistics.component';

import { ChartsComponent } from './starter/statistics/charts/charts.component';
import { SingleListComponent } from './single-list/single-list.component';
import { SingleEmpComponent } from './starter/single-emp/single-emp.component';
import { SingleEmp2Component } from './starter/single-emp2/single-emp2.component';










// const appRoutes: Routes= [
//   { path: 'personel/new', component: PersonelFormComponent},
//   { path: '', redirectTo: 'personel/new', pathMatch: 'full' },
//   { path: '**', redirectTo: 'personel/new'}
  

// ];

// @NgModule({
//   exports: [
//     MatSliderModule
//   ]
// })

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
    NotFoundComponent,
    AccueilComponent,
    PersonelInformationComponent,
    Form2Component,
    DataComponent,
    NavbarComponent,
    PersonalComponent,
    ResultComponent,
    WorkComponent,
    WorkflowComponent,
    AddressComponent,
    NewProjectComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ComportementComponent,
    StatisticsComponent,
    ChartsComponent,
    SingleListComponent,
    SingleEmpComponent,
    SingleEmp2Component,
 
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [EmployesService, WorkflowService, WorkflowGuard,FormDataService, authService, authGuardService, DataService],
  bootstrap: [AppComponent],

})

export class AppModule { }

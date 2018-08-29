import { Injectable }                        from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';
import { Personal, Address, FormData, myEmployeeLanguages, myFormations, Work, myExperiences, myProjects } from './formData.model';
import { STEPS }  from '../workflow/workflow.model';
import { EmployeeLanguages } from '../../../interfaces/employeeLanguages.interface';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private employee_languages: myEmployeeLanguages = new myEmployeeLanguages() ;
    private formations: myFormations= new myFormations();
    private experiences: myExperiences= new myExperiences();
    private projects: myProjects= new myProjects();
    

    constructor(private workflowService: WorkflowService,
        private httpClient: HttpClient) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            birthday: this.formData.birthday,
            phoneNumber: this.formData.phoneNumber,
            address: this.formData.address,
            dependentChild: this.formData.dependentChild
            
            
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.birthday=data.birthday;
        this.formData.phoneNumber=data.phoneNumber;
        this.formData.address=data.address
       
        
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : Work {

        var work: Work= {
           
            formations:{
                startDate: this.formData.startDate,
                endDate: this.formData.endDate,
                organization: this.formData.organization,
                country: this.formData.country,
                diploma: this.formData.diploma,
                level: this.formData.level,
                speciality: this.formData.speciality


            },
            employee_languages:{
                language:this.formData.language,
                level: this.formData.level2
            }
           

          
        };
        return work;
        
    }

    setWork(data: Work) {
        this.isPersonalFormValid = true;
        this.formData.language=data.employee_languages.language;
        this.formData.level2=data.employee_languages.level;
        this.formData.startDate=data.formations.startDate;
        this.formData.endDate=data.formations.endDate;
        this.formData.organization=data.formations.organization;
        this.formData.country=data.formations.country;
        this.formData.diploma=data.formations.diploma;
        this.formData.level=data.formations.level;
        this.formData.speciality=data.formations.speciality;
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        var address: Address={
            experiences:{
                position: this.formData.position,
                description:this.formData.descriptionE,
                startDate:this.formData.startDateE,
                endDate:this.formData.endDateE,
                city:this.formData.cityE,
                country:this.formData.countryE,
                employer:this.formData.employer
            },
            projects:{
                name:this.formData.name,
                date:this.formData.date,
                description:this.formData.descriptoinP
            }
        };
        return address;
    }
   
    setAddress(data: Address) {
        this.isPersonalFormValid = true;
        // Update the Address data only when the Address Form had been validated successfully
        this.formData.position=data.experiences.position;
        this.formData.descriptionE=data.experiences.description;
        this.formData.startDateE=data.experiences.startDate;
        this.formData.endDateE=data.experiences.endDate;
        this.formData.cityE=data.experiences.city;
        this.formData.countryE=data.experiences.country;
        this.formData.employer=data.experiences.employer;
        this.formData.name=data.projects.name;
        this.formData.date=data.projects.date;
        this.formData.descriptoinP=data.projects.description;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isAddressFormValid;
    }


    saveEmployeeToSerever(newEmplyee){

        let url = 'http://192.168.1.74:8000/intranet/api/employee-registration';
        // debugger
        this.httpClient.post(url, newEmplyee)
                       .subscribe(
                         () =>{
                           console.log('enregistrement termine !');
                         },
                         (error) =>{
                        //    debugger
                           console.log('erreur de sauvgarde' + error)
                         }
                       );
                     
          }
}

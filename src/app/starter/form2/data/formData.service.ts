import { Injectable }                        from '@angular/core';
import { WorkflowService } from '../workflow/workflow.service';
import { Personal, Address, FormData, myEmployeeLanguages, myFormations } from './formData.model';
import { STEPS }  from '../workflow/workflow.model';
import { EmployeeLanguages } from '../../../interfaces/employeeLanguages.interface';



@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private employee_languages: myEmployeeLanguages = new myEmployeeLanguages() ;
    private formations: myFormations= new myFormations();

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            birthday: this.formData.birthday,
            phoneNumber: this.formData.phoneNumber,
            address: this.formData.address,
            
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.birthday=data.birthday;
        this.formData.phoneNumber=data.phoneNumber;
        this.formData.address=data.address
       
        
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    // getWork() : string {
    //     // Return the work type
    //     return this.formData.work;
    // }
    getPersonal2(){
        
        var personal: Personal= {
           
            formations:{
                startDate: this.formData.startDate,
                endDate: this.formData.endDate,
                organisazion: this.formData.organization,
                country: this.formations.country,
                diploma: this.formData.diploma,
                level: this.formData.level,
                speciality: this.formData.speciality


            },
            employee_languages:{
                language:this.formData.language,
                level: this.formData.level2
            },
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
        return personal;
    }
     
    setPersonal2(data: Personal){
        this.isPersonalFormValid = true;
        this.formData.language=data.employee_languages.language;
        this.formData.level2=data.employee_languages.level;
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
       








        this.workflowService.validateStep(STEPS.work);

    }

    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
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
}

import { EmployeeLanguages } from "../../../interfaces/employeeLanguages.interface";
import { Experiences } from "../../../interfaces/experiences.interface";
import { Projects } from "../../../interfaces/projects.interface";
import { Formations } from "../../../interfaces/formations.interface";

export class FormData {
    firstName: string = '';
    lastName : string = '';
    language: number=null;
    level2: string='';
    level: number=null;
    startDate:Date= new Date();
    endDate:Date= new Date();
    organization: string='';
    country: string='';
    diploma: string='';
    speciality: string=''; 
    birthday: Date=new Date();
    phoneNumber: number=null;
    address: string='';
    position: string='';
    descriptionE: string='';
    startDateE:Date=new Date();
    endDateE:Date=new Date();
    cityE:string='';
    countryE:string='';
    employer:string='';
    name: string='';
    date:Date=new Date();
    descriptoinP:string='';
    dependentChild: number=null;
    project: Projects;
    

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.birthday=null;
        this.dependentChild=null;
        this.phoneNumber=null;
        this.address='';
        this.startDate=null;
        this.startDateE=null;
        this.endDate=null;
        this.endDateE=null;
        this.level=null;
        this.organization='';
        this.country='';
        this.diploma='';
        this.speciality='';
        this.level2='';
        this.language=null;
        this.position='';
        this.descriptionE='';
        this.descriptoinP='';
        this.cityE='';
        this.countryE='';
        this.employer='';
        this.name='';
        this.date=null;
        this.descriptoinP='';
        this.project=null;
    }
}

export class Personal {
    lastName?: string = '';
    firstName?: string = '';
	address?: string='';
	phoneNumber?: number = 22332233;
	birthday?: Date = new Date();
	dependentChild?: number = 1;
	
	
   
}

export class Work {
    formations?: Formations= new myFormations();
    employee_languages?: EmployeeLanguages = new myEmployeeLanguages();
}
export class Address {
    experiences?: Experiences= new myExperiences() ;
    projects?: Projects = new myProjects();
}

export class myEmployeeLanguages implements EmployeeLanguages{
   language: number = 1;
   level = '';
   
   

}
export class myFormations implements Formations{
    startDate: Date=new Date();
    endDate: Date=new Date();
    organization: string='';
    country: string='';
    diploma: string='';
    level:number=0;
    speciality: string='';
    
}
export class myExperiences implements Experiences{
    position: string='';
    description: string='';
    startDate: Date=new Date();
    endDate: Date= new Date();
    city: string='';
    country: string='';
    employer: string='';
    
}

export class myProjects implements Projects{
    name: string='';
    date: Date=new Date();
    description:string='';
}
import { EmployeeLanguages } from "../../../interfaces/employeeLanguages.interface";
import { Experiences } from "../../../interfaces/experiences.interface";
import { Projects } from "../../../interfaces/projects.interface";
import { Formations } from "../../../interfaces/formations.interface";

export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    language: number=0;
    level2: string='';
    level: number=0;
    startDate:Date= new Date();
    endDate:Date= new Date();
    organization: string='';
    country: string='';
    diploma: string='';
    speciality: string=''; 
    birthday: Date=new Date();
    phoneNumber: number=0;
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

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.organization='';
        this.country='';
        this.diploma='';
        this.speciality='';
        this.level2='';

        
    }
}

export class Personal {
    firstName?: string = '';
	username?: string = '';
    civility?: string = '';
    emil?:string = '';
	maritalStatus?: string = '';
	cnssNumber?: number = 0;
	currentPosition?: string = '';
	lastName?: string = '';
	email?: string = '';
	dateNaissance?: Date = new Date(12/12/2000);
	salaire?: number = 0;
	phoneNumber?: number = 22332233;
	address?: string = '';
	startDate?: Date = new Date(12/12/2000);;
	status?: string = '';
	image?: string = '';
	id?: number = 0;
	// plainPassword?: IPlainPassword = ;
	birthday?: Date = new Date();
	dependentChild?: number = 1;
	employee_languages?: EmployeeLanguages = new myEmployeeLanguages();
	experiences?: Experiences ;
    projects?: Projects ;
    formations?: Formations= new myFormations();
    
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class myEmployeeLanguages implements EmployeeLanguages{
   language: number = 1;
   level = '';

}
export class myFormations implements Formations{
    startDate: Date=new Date();
    endDate: Date=new Date();
    organisazion: string='';
    country: string='';
    diploma: string='';
    level:number=0;
    speciality: string='';
}
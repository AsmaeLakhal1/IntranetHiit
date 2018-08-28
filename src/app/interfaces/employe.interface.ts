import { IPlainPassword } from "./plainPassword.interface";
import { EmployeeLanguages } from "./employeeLanguages.interface";
import { Experiences } from "./experiences.interface";
import { Projects } from "./projects.interface";
import { Comportement } from "./comportement.interface";

export interface Employe {

	firstName?: string
	username?: string
	civility?: string
	maritalStatus?: string
	cnssNumber?: number
	currentPosition?: string
	lastName?: string
	email?: string
	dateNaissance?: Date
	salaire?: number
	phoneNumber?: number
	address?: string
	startDate?: Date
	status?: string
	image?: string
	id?: number
	plainPassword?: IPlainPassword
	birthday?: Date
	dependentChild?: number
	employee_languages?: EmployeeLanguages
	experiences?: Experiences
	projects?: Projects
	comportement?: Array<Comportement> 
}

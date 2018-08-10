import { IPlainPassword } from "./plainPassword.interface";

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
	numero?: number
	adresse?: string
	startDate?: Date
	status?: string
	image?: string
	id?: number
	plainPassword?: IPlainPassword
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPlainPassword } from '../../interfaces/plainPassword.interface';
import { Employe } from '../../interfaces/employe.interface';
import { HttpClient} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployesService {
  plainPassword: IPlainPassword
  private employes: Array<Employe> = [
    {
      id: 1,
      username: 'lakhal',
      email: 'aaa@aaa.com',
      civility: 'melle',
      maritalStatus: 'celibataire',
      currentPosition: 'developpeur',
      cnssNumber: 1212,
      startDate: new Date(),
      status: 'cdd',
      plainPassword: {
        first : 'ok',
        second : 'ok'
      }
    },

    {
      id: 2,
      username: 'ihasiika',
      email: 'sss@sss.com',
      civility: 'melle',
      maritalStatus: 'celibataire',
      currentPosition: 'developpeur',
      cnssNumber: 1212,
      startDate: new Date(),
      status: 'cdd',
      plainPassword: {
        first : 'ok',
        second : 'ok'
      }
    }
  ];
  employeSubject = new Subject<Employe[]>();

  constructor(private httpClient: HttpClient) {
   }

   emitEmploye(){
     this.employeSubject.next(this.employes);
   }

   createNewEmploye(newEmploye: Employe){
    this.employes.push(newEmploye);
    this.emitEmploye();
  }

  findById(id: number){
    const liste =this.employes.find(
      (employeeObject) => {
        return employeeObject.id === id;
        
        
      }
      
    );
    return liste;

  }
  
  saveEmployeeToSerever(newEmplyee){

let url = 'http://192.168.1.74:8000/intranet/api/employee-registration';
debugger
this.httpClient.post(url, newEmplyee)
               .subscribe(
                 () =>{
                   console.log('enregistrement termine !');
                 },
                 (error) =>{
                   debugger
                   console.log('erreur de sauvgarde' + error)
                 }
               );
             
  }
 
  
  
   



 


}

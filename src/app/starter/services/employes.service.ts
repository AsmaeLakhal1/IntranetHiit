import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPlainPassword } from '../../interfaces/plainPassword.interface';
import { Employe } from '../../interfaces/employe.interface';
import { HttpClient} from '@angular/common/http';
import { Comportement } from '../../interfaces/comportement.interface';
import { ComportementComponent } from '../comportement/comportement.component';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployesService {
  plainPassword: IPlainPassword
  private employes: Array<Employe> = [
    {
      id: 1,
      phoneNumber: 622114455,
      firstName: 'Asmae',
      username: 'LAKHAL',
      email: 'aaa@aaa.com',
      civility: 'melle',
      maritalStatus: 'celibataire',
      currentPosition: 'Architecte',
      cnssNumber: 1212,
      startDate: new Date(),
      status: 'cdd',
      plainPassword: {
        first : 'ok',
        second : 'ok'
      },
      comportement:[ {
        annee: 2016,
        implication: 2,
        discretion: 5,
        capaciteAdaptation: 4,
        ponctualite: 4,
        contactClient: 1,
        rigueur: 2,
        autonomie: 4,
        espritEquipe: 3,
        initiative: 5
      },
      
      {
        annee: 2017,
        implication: 3,
        discretion: 2,
        capaciteAdaptation: 4,
        ponctualite: 2,
        contactClient: 3,
        rigueur: 4,
        autonomie: 2,
        espritEquipe: 3,
        initiative: 5
      },
      {
        annee: 2018,
        implication: 5,
        discretion: 4,
        capaciteAdaptation: 2,
        ponctualite: 2,
        contactClient: 3,
        rigueur: 3,
        autonomie: 5,
        espritEquipe: 5,
        initiative: 5
      }
    ],
      
      
    },
    {
      id: 2,
      phoneNumber: 655889955,
      firstName: 'Hajar',
      username: 'KAMAL',
      email: 'hhh@hhh.com',
      civility: 'melle',
      maritalStatus: 'celibataire',
      currentPosition: 'Developpeur',
      cnssNumber: 1212,
      startDate: new Date(),
      status: 'cdd',
      plainPassword: {
        first : 'ok',
        second : 'ok'
      },
      comportement:[ {
        annee: 2016,
        implication: 2,
        discretion: 5,
        capaciteAdaptation: 4,
        ponctualite: 4,
        contactClient: 1,
        rigueur: 2,
        autonomie: 4,
        espritEquipe: 3,
        initiative: 5
      },
      
      {
        annee: 2017,
        implication: 3,
        discretion: 2,
        capaciteAdaptation: 4,
        ponctualite: 2,
        contactClient: 3,
        rigueur: 4,
        autonomie: 2,
        espritEquipe: 3,
        initiative: 5
      },
      {
        annee: 2018,
        implication: 5,
        discretion: 4,
        capaciteAdaptation: 2,
        ponctualite: 2,
        contactClient: 3,
        rigueur: 3,
        autonomie: 5,
        espritEquipe: 5,
        initiative: 5
      }
    ],
      
      
    },


    {
      id: 3,
      phoneNumber: 622114455,
      firstName: 'Sara',
      username: 'IHASIKA ',
      email: 'sss@sss.com',
      civility: 'melle',
      maritalStatus: 'celibataire',
      currentPosition: 'Developpeur',
      cnssNumber: 1212,
      startDate: new Date(),
      status: 'cdd',
      plainPassword: {
        first : 'ok',
        second : 'ok'
      },

      comportement:[ {
        annee: 2016,
        implication: 5,
        discretion: 1,
        capaciteAdaptation: 2,
        ponctualite: 4,
        contactClient: 1,
        rigueur: 4,
        autonomie: 2,
        espritEquipe: 2,
        initiative: 2
      },
      {
        annee: 2017,
        implication: 5,
        discretion: 5,
        capaciteAdaptation: 4,
        ponctualite: 2,
        contactClient: 2,
        rigueur: 3,
        autonomie: 4,
        espritEquipe: 3,
        initiative: 5
      },
      {
        annee: 2018,
        implication: 5,
        discretion: 5,
        capaciteAdaptation: 5,
        ponctualite: 5,
        contactClient: 5,
        rigueur: 5,
        autonomie: 5,
        espritEquipe: 5,
        initiative: 5
      }
    ]
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

  createNewComportement(newComportement: Comportement){

    


  }

  findById(id: number){
    // debugger
    const liste =this.employes.find(
      (employeeObject) => {
        return employeeObject.id === id;
        
        
      }
      
    );
    // debugger
    return liste;

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
                  //  debugger
                   console.log('erreur de sauvgarde' + error)
                 }
               );
             
  }

  
 
  
  
   



 


}

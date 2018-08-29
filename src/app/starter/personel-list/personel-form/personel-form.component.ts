import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployesService } from '../../services/employes.service';

import { Subscription } from 'rxjs';
import { IPlainPassword } from '../../../interfaces/plainPassword.interface';
import { Employe } from '../../../interfaces/employe.interface';
import { debug } from 'util';


@Component({
  selector: 'app-personel-form',
  templateUrl: './personel-form.component.html',
  styleUrls: ['./personel-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonelFormComponent implements OnInit{
  employeForm: FormGroup;
  defaultStatus = 'Developpeur';
  plainPassword: IPlainPassword;
  employeObjet : Employe;
  employes: Employe[];
  
  // employeSubscription: Subscription;
  constructor(private formBuilder: FormBuilder,
    private employesService: EmployesService,
    private router: Router,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    // debugger
    this._router.paramMap.subscribe(parameter =>{
      const id = +parameter.get('id');
      this.getEmploye(id);
    })
   // this.employeObjet = this.employesService.findById(1)
    this.initForm();
  }
  private getEmploye(id: number){
    // if(id === 0){
    //   this.employe
    // }
    // debugger

    this.employeObjet = this.employesService.findById(id);
    // debugger
  }


  initForm() {
    
    this.employeForm = this.formBuilder.group({
      username: ['', Validators.required],
      civility: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      cnssNumber: ['', Validators.required],
      currentPosition: ['', Validators.required],
      email: ['', Validators.required],
      startDate : ['', Validators.required],
      status: ['', Validators.required],
      plainPasswordFirst: ['', Validators.required],
      plainPasswordSecond: ['', Validators.required],
       
    });
  }
  onSubmitForm(){
    const formValue = this.employeForm.value;
     
    const newEmploye : Employe = {
      username: formValue['username'],
      civility: formValue['civility'],
      maritalStatus: formValue['maritalStatus'],
      cnssNumber: formValue['cnssNumber'],
      currentPosition: formValue['currentPosition'],
      email: formValue['email'],
      startDate: formValue['startDate'], /*this.getDate(formValue),*/
      status: formValue['status'],
      plainPassword : {
        first : formValue['plainPasswordFirst'],
        second : formValue['plainPasswordSecond'],      
      }
     
  };

    this.employesService.createNewEmploye(newEmploye);
    this.router.navigate(['/personel']);
    this.onSave(newEmploye);
  }
  onSave(newEmployee){
    this.employesService.saveEmployeeToSerever(newEmployee);
  }
  

  
  
  // getDate(formValue: any) {
  //   const formDate = formValue['startDate'].substring(0,10).valueOf();
  //   debugger;
  //   return formDate.substring(5,6) + 1 + '/' + formDate.substring(8,9) + '/' + formDate.substring(0,4);
  // }

  // onSaveEmploye() {
  //   const title = this.employeForm.get('title').value;
  //   const author = this.employeForm.get('author').value;
  //   // const synopsis = this.employeForm.get('synopsis').value;
  //   const newEmploye = new Employe(title, author);
  //   // newBook.synopsis = synopsis;
  //   this.employesService.createNewEmploye(newEmploye);
  //   this.router.navigate(['/employes']);
  // }

}




  




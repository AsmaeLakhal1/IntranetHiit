import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployesService } from '../services/employes.service';
import { Router } from '@angular/router';
import { Comportement } from '../../interfaces/comportement.interface';

@Component({
  selector: 'app-comportement',
  templateUrl: './comportement.component.html',
  styleUrls: ['./comportement.component.css']
})
export class ComportementComponent implements OnInit {

 employeForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private employesService: EmployesService,
    private router: Router) { }

  ngOnInit() {
    
    this.initForm();
  }

  initForm() {
    
    this.employeForm = this.formBuilder.group({
      implication: ['', Validators.required],
      discretion: ['', Validators.required],
      capaciteAdaptation: ['', Validators.required],
      ponctualite: ['', Validators.required],
      contactClient: ['', Validators.required],
      rigueur: ['', Validators.required],
      autonomie : ['', Validators.required],
      espritEquipe: ['', Validators.required],
      initiative: ['', Validators.required],
     
       
    });
  }
  onSubmitForm(){
    const formValue = this.employeForm.value;
     
    const newComportement : Comportement = {
      implication: formValue['implication'],
      discretion: formValue['discretion'],
      capaciteAdaptation: formValue['capaciteAdaptation'],
      ponctualite: formValue['ponctualite'],
      contactClient: formValue['contactClient'],
      rigueur: formValue['rigueur'],
      autonomie: formValue['autonomie'], /*this.getDate(formValue),*/
      espritEquipe: formValue['espritEquipe'],
      initiative: formValue['initiative']

     
      
     
  };

   console.log(newComportement);
    this.router.navigate(['/personel']);
   
  }
 
}

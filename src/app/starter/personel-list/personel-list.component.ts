import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Employe } from '../../interfaces/employe.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployesService } from '../services/employes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonelListComponent implements OnInit {

  employeForm: FormGroup;
  employes: Employe[];
  employeObjet: Employe;
  employeSubscription: Subscription;
  @Input() id : number;
  @Input() indexOfEmployee: number;
  constructor(private formBuilder: FormBuilder,
    private employesService: EmployesService,
    private router: Router
    ) { }

  ngOnInit() {
   
    this.employeSubscription = this.employesService.employeSubject.subscribe(
      (employes: Employe[]) => {
        this.employes=employes;
      }
    )
    this.employesService.emitEmploye();
    // this.initForm();
  }


  editEmploye(employeItem){
    
    this.router.navigate(['/personel/new', employeItem.id]);
  }



  

}

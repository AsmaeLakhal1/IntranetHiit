import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employe } from '../models/employe.model';
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
  employeSubscription: Subscription;
  constructor(private formBuilder: FormBuilder,
    private employesService: EmployesService,
    private router: Router,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    this.employeSubscription = this.employesService.employeSubject.subscribe(
      (employes: Employe[]) => {
        this.employes=employes;
      }
    )
    this.employesService.emitEmploye();
    // this.initForm();
  }

  editEmploye(){
    this.router.navigate(['personel/new/:id', this.employesService.employeSubject]);
  }

  

}

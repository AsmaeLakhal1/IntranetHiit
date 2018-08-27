import { Component, OnInit } from '@angular/core';
import { Employe } from '../../interfaces/employe.interface';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { EmployesService } from '../services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  
  employes: Employe[];
  employeSubscription: Subscription;
  constructor(
    private employesService: EmployesService,
    private router: Router,
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
}

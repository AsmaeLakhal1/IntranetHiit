import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployesService } from '../services/employes.service';
import { Router, ActivatedRoute } from '@angular/router';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarterContentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private employesService: EmployesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Update the AdminLTE layouts
    // AdminLTE.init();
  }

}

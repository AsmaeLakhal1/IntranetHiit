import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormDataService } from '../form2/data/formData.service';
import { FormData } from '../form2/data/formData.model';
import { EmployesService } from '../services/employes.service';

@Component({
  selector: 'app-personel-information',
  templateUrl: './personel-information.component.html',
  styleUrls: ['./personel-information.component.css']
})
export class PersonelInformationComponent implements OnInit {
  @Input() formData: FormData;
  firstName: string = 'Asm';
  username: string;
  constructor(private formDataService: FormDataService,
              private employeService: EmployesService,
               private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
   const id = this.route.snapshot.params['id'];
  //  this.firstName = this.employeService.findById(+id).firstName;
   this.username = this.employeService.findById(+id).username;
    
  }

}

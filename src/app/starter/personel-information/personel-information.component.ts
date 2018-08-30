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
  username: string;
  firstName: string;
  currentPosition: string;
  email: string;
  status: string;
  phoneNumber: number;

  


  constructor(private formDataService: FormDataService,
              private employeService: EmployesService,
               private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log(this.formData = this.formDataService.getFormData());
   const id = this.route.snapshot.params['id'];
   this.firstName = this.employeService.findById(+id).firstName;
   this.username = this.employeService.findById(+id).username;
   this.currentPosition = this.employeService.findById(+id).currentPosition;
   this.email = this.employeService.findById(+id).email;
   this.status = this.employeService.findById(+id).status;
   this.phoneNumber = this.employeService.findById(+id).phoneNumber;
    
  }

}

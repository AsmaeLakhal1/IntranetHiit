import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';
import { FormData }                   from '../data/formData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Merci pour votre inscription';
  @Input() formData: FormData;
  isFormValid: boolean = false;
  
  constructor(private formDataService: FormDataService,
              private router: Router) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log('Result feature loaded!');
  }

  submit() {
      alert('Inscription réussie  !!');
      this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
      this.sendDataToServer(this.formData);
  }

  sendDataToServer(employee){
    this.formDataService.saveEmployeeToSerever(employee);
  }


}

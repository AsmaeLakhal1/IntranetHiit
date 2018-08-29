import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import {  Input, Output, EventEmitter } from '@angular/core';
import { Personal, Address } from '../data/formData.model';
import {  Projects } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  address: Address;
  personal: Personal;
  form: any;
  @Output()
  saveBtn: EventEmitter<Projects> = new EventEmitter<Projects>();
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.address = this.formDataService.getAddress();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setAddress(this.address);
      return true;
  }
  validate(form: any) {
    
      if (this.save(form)) {
          
          this.router.navigate(['/address']);
      }

      this.saveProject();
    }
    saveProject() {
        // debugger
        this.saveBtn.emit(this.address.projects);
        // debugger
      }

}

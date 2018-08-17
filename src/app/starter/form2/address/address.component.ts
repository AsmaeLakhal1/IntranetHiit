import { Component, OnInit, Input } from '@angular/core';
import { Address, Personal } from '../data/formData.model';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  title = 'Vos expériences !!';
  address: Address;
  personal: Personal;
  form: any;
  add: boolean=false;
  
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

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/work']);
      }
  }

  goToNext(form: any) {
    debugger
      if (this.save(form)) {
          // Navigate to the result page
          this.router.navigate(['/result']);
      }
  }

  addProject(){
      this.add=true;
  }

  saveChange(event){
      this.address.projects=event;
  }

}

import { Component, OnInit } from '@angular/core';
import { Address, Personal } from '../data/formData.model';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

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
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personal = this.formDataService.getPersonal2();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setPersonal2(this.personal);
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

}

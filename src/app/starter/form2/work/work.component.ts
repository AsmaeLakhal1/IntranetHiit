import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Personal } from '../data/formData.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = 'Compléter vos informations à propos de votre formation';
  workType: string;
  workType3: string;
  workType2: string;
  form: any;
  personal: Personal
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

 

  ngOnInit() {
      
    this.personal = this.formDataService.getPersonal2();
    console.log('Personal feature loaded!');

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
          // Navigate to the personal page
          this.router.navigate(['/personal']);
      }
  }

  goToNext(form: any) {
      
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/address']);
      }
  }

}

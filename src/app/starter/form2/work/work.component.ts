import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Personal, Work } from '../data/formData.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = 'A propos de votre formation';
  work: Work;
  workType3: string;
  workType2: string;
  form: any;
//   personal: Personal
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

 

  ngOnInit() {
      debugger
    this.work = this.formDataService.getWork();
    console.log('work feature loaded!');

}

save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setWork(this.work);
    return true;
}
  

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['/personal']);
      }
  }

  goToNext(form: any) {
      debugger
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['/address']);
          
      }
  }

}

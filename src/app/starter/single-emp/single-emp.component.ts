import { Component, OnInit, Input } from '@angular/core';
import { EmployesService } from '../services/employes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormData } from '../form2/data/formData.model';
import { FormDataService } from '../form2/data/formData.service';
import { Employe } from '../../interfaces/employe.interface';


@Component({
  selector: 'app-single-emp',
  templateUrl: './single-emp.component.html',
  styleUrls: ['./single-emp.component.css']
})
export class SingleEmpComponent implements OnInit {
  @Input() id: number;
  @Input() username: string;
  @Input() email: string;
  @Input() formData: FormData;
  emp: Employe;
  

  constructor(private formDataService: FormDataService,
              private employeService: EmployesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    const id = this.route.snapshot.params['id'];
   //  this.firstName = this.employeService.findById(+id).firstName;
    // this.id = this.employeService.findById(+id).id;
    // this.username = this.employeService.findById(+id).username;
    // this.email = this.employeService.findById(+id).email;
    
  }

  deleteEmployee(id: number){
      this.emp = this.employeService.findById(id);
      const index = this.employeService.getEmployees().indexOf(this.emp);
    if (index !== -1){
      this.employeService.getEmployees().splice(index,1);
    }


  }

}

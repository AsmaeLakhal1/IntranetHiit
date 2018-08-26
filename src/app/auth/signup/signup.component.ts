import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { authService } from '../../starter/services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { DataService } from '../../starter/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


 signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: authService,
              private router: Router,
              private data: DataService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    
    this.authService.createNewUser(email, password).then(
      () => {
        this.newMessage();
        this.router.navigate(['/inscription']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
   
  }

  newMessage() {
    this.data.changeMessage(true)
  }

}

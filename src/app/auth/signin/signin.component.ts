import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { authService } from '../../starter/services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { DataService } from '../../starter/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: authService,
              private router: Router,
              private data: DataService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    
    this.authService.signInUser(email, password).then(
      () => {
        this.newMessage();
        this.router.navigate(['/home']);
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

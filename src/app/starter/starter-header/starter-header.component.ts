import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { authService } from '../services/auth.service';
import * as firebase from 'firebase';
import { DataService } from '../services/data.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarterHeaderComponent implements OnInit {

  isAuth: boolean=false;

  constructor(private authService: authService,
              private data: DataService,
              private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.isAuth = message)
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
    this.newMessage();
    this.router.navigate(['/home']);
    
  }
  newMessage() {
    this.data.changeMessage(false)
  }
  

}

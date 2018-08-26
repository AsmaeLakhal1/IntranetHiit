import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as firebase from 'firebase';
import { DataService } from './starter/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
  isAuth: boolean=false;
  constructor(private data: DataService){

    var config = {
      apiKey: "AIzaSyDLRjiT5YGu88Z8SLuxgy9VzNIAdBqyGfA",
      authDomain: "hiitconsulting-47548.firebaseapp.com",
      databaseURL: "https://hiitconsulting-47548.firebaseio.com",
      projectId: "hiitconsulting-47548",
      storageBucket: "hiitconsulting-47548.appspot.com",
      messagingSenderId: "411305189550"
    };
    firebase.initializeApp(config);
    

  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.isAuth = message)
  }

  newMessage() {
    this.data.changeMessage(true)
  }
}

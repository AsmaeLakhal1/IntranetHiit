import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AccueilComponent implements OnInit {
  birthday = new Date(2012, 4, 9)
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NotFoundComponent implements OnInit {
 myDate= new Date(2013, 9, 22);
  constructor() { }

  ngOnInit() {
  }

}

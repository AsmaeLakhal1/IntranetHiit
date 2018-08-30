import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmp2Component } from './single-emp2.component';

describe('SingleEmp2Component', () => {
  let component: SingleEmp2Component;
  let fixture: ComponentFixture<SingleEmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

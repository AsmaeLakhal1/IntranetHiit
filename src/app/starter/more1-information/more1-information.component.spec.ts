import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More1InformationComponent } from './more1-information.component';

describe('More1InformationComponent', () => {
  let component: More1InformationComponent;
  let fixture: ComponentFixture<More1InformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More1InformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More1InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

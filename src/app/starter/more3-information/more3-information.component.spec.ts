import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More3InformationComponent } from './more3-information.component';

describe('More3InformationComponent', () => {
  let component: More3InformationComponent;
  let fixture: ComponentFixture<More3InformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More3InformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More3InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

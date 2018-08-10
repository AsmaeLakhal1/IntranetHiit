import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { More2InformationComponent } from './more2-information.component';

describe('More2InformationComponent', () => {
  let component: More2InformationComponent;
  let fixture: ComponentFixture<More2InformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ More2InformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(More2InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonelComponent } from './single-personel.component';

describe('SinglePersonelComponent', () => {
  let component: SinglePersonelComponent;
  let fixture: ComponentFixture<SinglePersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

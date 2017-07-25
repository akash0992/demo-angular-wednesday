import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplate1Component } from './form-template1.component';

describe('FormTemplate1Component', () => {
  let component: FormTemplate1Component;
  let fixture: ComponentFixture<FormTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

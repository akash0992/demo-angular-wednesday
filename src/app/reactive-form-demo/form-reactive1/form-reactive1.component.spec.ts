import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactive1Component } from './form-reactive1.component';

describe('FormReactive1Component', () => {
  let component: FormReactive1Component;
  let fixture: ComponentFixture<FormReactive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

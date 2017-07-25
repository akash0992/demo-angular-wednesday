import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { FormReactive1Component } from './form-reactive1/form-reactive1.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [FormReactive1Component],
  exports: [FormReactive1Component]
})
export class ReactiveFormDemoModule { }

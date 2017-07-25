import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { FormTemplate1Component } from './form-template1/form-template1.component';
import { FormTemplate2Component } from './form-template2/form-template2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [FormTemplate1Component, FormTemplate2Component],
  exports: [FormTemplate1Component, FormTemplate2Component]
})
export class TemplateFormDemoModule { }

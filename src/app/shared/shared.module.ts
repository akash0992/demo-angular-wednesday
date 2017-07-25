import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmittedComponent } from './submitted/submitted.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmittedComponent, ForbiddenValidatorDirective],
  exports:      [ ForbiddenValidatorDirective, SubmittedComponent,
                  CommonModule ]
})
export class SharedModule { }

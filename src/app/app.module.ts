import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormDemoModule } from './template-form-demo/template-form-demo.module';
import { ReactiveFormDemoModule } from './reactive-form-demo/reactive-form-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateFormDemoModule,
    ReactiveFormDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

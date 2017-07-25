import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingImpurePipe } from './pipes/flying-impure.pipe';
import { FlyingPipe } from './pipes/flying.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    FlyingImpurePipe,
    FlyingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

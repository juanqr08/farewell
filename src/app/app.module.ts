import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarewellComponent } from './components/farewell/farewell.component';
import { ConstantService } from './services/constant.service';
import { AlertService } from './services/messages/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    FarewellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConstantService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

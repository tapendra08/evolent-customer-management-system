import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AddNewContact} from './add-contact/add-contact.component';
import { AppRoutingModule , routingComponent } from './routing-module/app-routing.module';
import { AuthGaurdService } from './routing-module/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AddNewContact
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }

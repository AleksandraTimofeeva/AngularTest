import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {NotificationsManagerComponent} from "./notifications-manager/notifications-manager.component";
import {NotificationsButtonComponent} from "./notifications-button/notifications-button.component";


@NgModule({
  declarations: [
    AppComponent,
    NotificationsManagerComponent,
    NotificationsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

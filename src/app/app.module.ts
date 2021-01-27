import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdTypeaheadFormat } from './typeahead-format';

import { MaterialsModule } from './material/material.module';
import Swal from 'sweetalert2'
import { HomeComponent } from './components/home/home.component';
import { ApplicationformComponent } from './components/applicationform/applicationform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationformComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

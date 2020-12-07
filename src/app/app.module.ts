import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module"
import {
  HttpClientModule, HTTP_INTERCEPTORS
} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ng6-toastr-notifications";
import { AuthGuardService } from "./service/auth-guard.service"
import { TokenInterceptor } from "./service/interceptor.service"
import { AuthService } from "./service/service.service"


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CareerComponent } from './career/career.component';
import { JobComponent } from './job/job.component';
import { JobtypeComponent } from './home/jobtype/jobtype.component';
import { JobsComponent } from './job/jobs/jobs.component';
import { RecentjobComponent } from './home/recentjob/recentjob.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    CareerComponent,
    JobComponent,
    JobtypeComponent,
    JobsComponent,
    RecentjobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot()


  ],
  providers: [AuthService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

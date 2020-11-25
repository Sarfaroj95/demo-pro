import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module"

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

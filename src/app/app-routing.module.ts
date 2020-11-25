import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JobComponent } from "./job/job.component";
import { CareerComponent } from './career/career.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';






const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    { path: "home", component: HomeComponent },
    { path: "job", component: JobComponent },
    { path: "career", component: CareerComponent },
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

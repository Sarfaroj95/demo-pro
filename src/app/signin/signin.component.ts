import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";

import { AuthService } from "../service/service.service"



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  userData: any = []
  constructor(private fb: FormBuilder, private toastr: ToastrManager, private auth: AuthService) { }

  ngOnInit() {
    this.initForm()
    this.GetUser()

  }


  initForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          )
        ]
      ],

      password: ["", Validators.required]
    });
  }

  onSubmit() {
    let value = this.loginForm.value
    this.auth.login(value).subscribe(
      res => (
        console.log("Respoce", res),
        localStorage.setItem("token", res.token),
        localStorage.setItem("id", res.id),
        this.toastr.successToastr("Login Successfully.", "Success!", { timeOut: 3000 }),
        this.loginForm.reset(),
        this.GetUser()
      ),
      error => {
        let er = error.error.errors[0];
        this.toastr.errorToastr(er.details, er.title, { timeOut: 3000 });
      }
    )
  }

  GetUser() {
    let id = this.auth.getId()
    console.log("id", id)
    this.auth.getUser(id).subscribe(
      res => (
        // console.log("result", res)
        this.userData = res
      )
    )
  }

  logout() {
    this.auth.deleteToken();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router } from "@angular/router";

import { AuthService } from "../service/service.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrManager, private auth: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.registerForm = this.fb.group({
      fname: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      lname: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      phone: ["", [Validators.required, Validators.pattern("^[1-9][0-9,]+$")]],

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
      //  passwordConfirmation: []
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    var value = this.registerForm.value;

    this.auth.register(value).subscribe(
      result => {
        this.toastr.successToastr("Registered Successfully.", "Success!", { timeOut: 3000 });
        this.registerForm.reset()
        this.router.navigate(["/signin"]);
      },
      error => {
        let er = error.error.errors[0];
        this.toastr.errorToastr(er.details, er.title, { timeOut: 3000 });

      }
    );
  }
}



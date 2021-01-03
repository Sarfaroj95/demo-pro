import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}

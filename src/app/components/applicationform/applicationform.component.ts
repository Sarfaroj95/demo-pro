import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import Swal from 'sweetalert2'
const states = ['Html', 'Css', 'Vue Js', 'Node js', 'Java', 'Java Script', 'Type Script', 'Spring Boot', 'Angular 9', 'React Js', 'Redux', 'Aws Server'];

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
  public model: any;
  public model1: any;

  formatter = (result: string) => result.toUpperCase();

  appForm: FormGroup




  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.appForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      email: ["", [
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
        )
      ]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      year: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      month: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      qualification: ["", [Validators.required, Validators.pattern("^[a-zA-Z -]*$")]],
      current_organization: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      total_worked: this.fb.array([this.fb.group({ worked: '' })]),
      total_technology: this.fb.array([this.fb.group({ tech: '', rating: '' })]),
      total_expertice: this.fb.array([this.fb.group({ expert: '', level: '' })]),
      time: ["", [Validators.required]]
    })
  }


  get sellingPoints() {
    return this.appForm.get('total_worked') as FormArray;
  }

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({ worked: '' }));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }

  get totalTech() {
    return this.appForm.get('total_technology') as FormArray;
  }

  AddTechRow() {
    this.totalTech.push(this.fb.group({ tech: '', rating: '' }))
  }

  DeleteTechRow(index) {
    this.totalTech.removeAt(index)
  }

  get totalExpert() {
    return this.appForm.get("total_expertice") as FormArray;
  }

  AddExpertRow() {
    return this.totalExpert.push(this.fb.group({ expert: '', level: '' }))
  }

  DeleteExpertRow(index) {
    this.totalExpert.removeAt(index)
  }


  onSubmit() {
    console.log("Submit value", this.appForm.value)
    this.appForm.reset();
    Swal.fire(
      'Successful',
      'Thank you for getting in touch! We appreciate you contacting us',
      'success',
    )
  }



  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )




}

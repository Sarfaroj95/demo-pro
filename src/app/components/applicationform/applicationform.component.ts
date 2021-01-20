import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const states = ['Java', 'Java Script', 'Spring Boot', 'Angular 8', 'React Js', 'Redux'];

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
  public model: any;
  formatter = (result: string) => result.toUpperCase();

  appForm: FormGroup




  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.appForm = this.fb.group({
      name: [""],
      email: [""],
      total_worked: this.fb.array([this.fb.group({ worked: '' })]),
      total_technology: this.fb.array([this.fb.group({ tech: '', rating: '' })])


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

  onSubmit() {
    console.log("Submit value", this.appForm.value)
  }



  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )




}

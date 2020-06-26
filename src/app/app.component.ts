import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Icomment } from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  /*
  *array for each image details
  */
  arrImage:any[];
  /*
  *array for comments
  */
  arrComments:  Array<Icomment> = [];
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
        comment :[""]
    })
  }
 
/**
 * Initialise all variables
 */
ngOnInit() {
  this.arrImage = [
    {imgsrc: "assets/insta.jpg", username: "Muhammed" },
    {imgsrc: "assets/insta1.jpg", username: "Anupama" },
    {imgsrc: "assets/insta2.jpg", username: "kareem" },
    {imgsrc: "assets/insta3.jpg", username: "Aiza" },
    {imgsrc: "assets/insta.jpg", username: "Mubashira" },
    {imgsrc: "assets/insta1.jpg", username: "Anupama" },
    {imgsrc: "assets/insta3.jpg", username: "jebin" },
    {imgsrc: "assets/insta.jpg", username: "Shafi" },
    {imgsrc: "assets/insta2.jpg", username: "Anupama" },
    {imgsrc: "assets/insta1.jpg", username: "Anupama" },
    {imgsrc: "assets/insta.jpg", username: "Anupama" },
    {imgsrc: "assets/insta.jpg", username: "Anupama" },
  ]
}
/**
 * Function for entering comment
 */
onEnter(){
  this.arrComments.push(this.myForm.value);
  console.log(this.arrComments);
  
  this.myForm.reset('')
}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms'
import { Validators} from '@angular/forms'
@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css']
})
export class AjoutVoitureComponent implements OnInit {
  ajoutVoitureForm : any;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  initForm()
  {
    this.ajoutVoitureForm = new FormGroup ({
      nomVoiture: new FormControl (' ',Validators.required),
      numSerie: new FormControl (' '),
      cin : new FormControl (' '),
      numTel : new FormControl (' ')});
      console.log(this.ajoutVoitureForm.value);
  }
  onSubmit() {
   // console.warn(this.ajoutVoitureForm.value);
   // console.log(this.ajoutVoitureForm.controls['nom'].value );
    console.log(this.ajoutVoitureForm);

  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms'
import { Validators} from '@angular/forms'
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  ajoutClientForm : any;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  initForm()
  {
    this.ajoutClientForm = new FormGroup ({
      nomClient: new FormControl (' ',Validators.required),
      numSerie: new FormControl (' '),
      cin : new FormControl (' '),
      numTel : new FormControl (' ')});
      console.log(this.ajoutClientForm.value);
  }
  onSubmit() {
 
    console.log(this.ajoutClientForm);

  }
}
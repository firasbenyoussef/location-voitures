import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms'
import { VoitureService} from '../../services/voiture.service';
import {Voiture } from '../../shared/Models/Voiture';
@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css'] 
})
export class AjoutVoitureComponent implements OnInit {
  ajoutVoitureForm : any;
  newVoiture:Voiture;
  constructor(private voitureService : VoitureService) {
  } 

  ngOnInit() {
    this.initForm();
  }
  initForm()
  {
    this.ajoutVoitureForm = new FormGroup ({
      matricule: new FormControl (' ',Validators.required),
      marque : new FormControl (' ',Validators.required),
      couleur : new FormControl (' ',Validators.required)});
  }

  onSubmit() {
    this.newVoiture= new Voiture();
    this.newVoiture.matricule=this.ajoutVoitureForm.controls.matricule.value;
    this.newVoiture.marque=this.ajoutVoitureForm.controls.marque.value;
    this.newVoiture.couleur=this.ajoutVoitureForm.controls.couleur.value;
    this.newVoiture.disponibilite=true;
    this.voitureService.addVoiture(this.newVoiture).subscribe(
      data=>
      {
        console.log(data);
        this.ajoutVoitureForm.reset();
      },
      error =>
      {
        this.ajoutVoitureForm.reset();
        
      }
    )

  }
  addVoiture()
  {
    
  }
}

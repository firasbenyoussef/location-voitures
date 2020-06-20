import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: any[] = [{ nom:"Honda",prenom:"187 TN 001",cin :"oui",numeroTel :"oui",adresse :"oui",email :"oui"}];

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'cin', 'numeroTel', 'adresse', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
  

import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [{ nomVoiture:"Honda",numSerie:"187 TN 001",dispo :"oui"},{ nomVoiture:"fiat",numSerie:"187 TN 002",dispo:"non"}];

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent implements OnInit {
  displayedColumns: string[] = ['nomVoiture', 'numSerie', 'Dispo'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

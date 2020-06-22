import { Component, OnInit, ViewChild } from '@angular/core';
import {VoitureService} from '../../services/voiture.service'
import { MatTableDataSource, MatPaginator, MatSort,MatStep } from '@angular/material';
import { Voiture } from 'src/app/shared/Models/Voiture';
const ELEMENT_DATA: any[] = [];
@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent implements OnInit {
  displayedColumns: string[] = ['index','marque', 'couleur', 'matricule','Dispo','date','modifier','supprimer'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  listesVoitures:Voiture[];
  constructor(private voitureService : VoitureService) { }

  ngOnInit() {
    this.getVoitures();
    
  }
  initTableFromSearch() {

    ELEMENT_DATA.length = 0;
    console.log(this.listesVoitures)
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listesVoitures.length; i++) {
      console.log(this.listesVoitures[i])
      this.listesVoitures[i].idVoiture=i+1;
      ELEMENT_DATA.push(this.listesVoitures[i]);
    }
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
     this.dataSource.paginator = this.paginator;
  }
  getVoitures()
  {
    this.voitureService.getAll().subscribe(
      data=>
      {
        console.log(data);
        this.listesVoitures=data;
        console.log(this.listesVoitures);
        this.initTableFromSearch();
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

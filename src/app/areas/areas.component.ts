import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatFormFieldControl} from '@angular/material';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas: Area[];

  newArea: Area = {
    id_area: 0,
    sigla_area: '',
    area_atua: "",
    equi_area: "",
    obs_area: ""
  }  

  displayedColumns: string[] = ['sigla', 'area', 'equi', 'obs'];
  dataSource = new MatTableDataSource<Area>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.apiService.getArea().subscribe(response => {
      this.dataSource.data = response;
    });
  }
  escreve(){
    this.apiService.postArea(this.newArea).subscribe(response =>{
      console.log('deu certo');
    });
  }

}

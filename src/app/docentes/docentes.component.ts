import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatFormFieldControl} from '@angular/material';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes: Docente[];

  newDocente: Docente = {
    id_docente: 0,
    campus_docente: "Guarulhos",
    nome_docente: "",
    area_docente: "",
    desc_area: "",
    regime_trabalho: "",
    fg_fcc: "",
    cont_docente: "",
    docente_integral: "",
    docente_equi: "",
    obs_docente: ""
  }  


  displayedColumns: string[] = ['nome', 'area', 'desc', 'regime', 'fg', 'cont', 'docente', 'docequi', 'obs'];
  dataSource = new MatTableDataSource<Docente>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.apiService.getDocente().subscribe(response => {
      this.dataSource.data = response;
    });
  }
    escreve(){
      this.apiService.postDocente(this.newDocente).subscribe(response =>{
        console.log('deu certo');
      });
    
  }

}

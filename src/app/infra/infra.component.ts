import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatFormFieldControl} from '@angular/material';
import { ApiService } from '../api.service'


@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.css']
})
export class InfraComponent implements OnInit {

  infra: Infra[];

  newInfra: Infra = {
    campus_infra: 'Guarulhos',
    situacao_infra: '',
    tipo_espaco: '',
    nome_espaco: '',
    capacidade_esp: 0,
  }  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Infra>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.apiService.getInfra().subscribe(response => {
      console.log(response);
      this.dataSource.data = response
      this.infra = response;
    });
  }
  getClass(situation){
    if(situation == 'Existente')
      return 'green-bg'
    if(situation == 'Previsto')
      return 'red-bg'
  }
  escreve(){
    this.apiService.postInfra(this.newInfra).subscribe(response =>{
      console.log('deu certo');
    });
  }
  addNew(){
    // var myEl = angular.element( document.querySelector( '.example-container' ) );
    // myEl.addClass('testeeeee');
  }

  


}



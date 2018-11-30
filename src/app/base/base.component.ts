import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatFormFieldControl} from '@angular/material';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  bases: Base[];

  displayedColumns: string[] = ['eixo', 'tipo', 'base', 'tipoof', 'dis', 'modalidade', 'turno', 'semestre', 'periodic', 'periogress', 'situacao', 'situppc', 'fomento', 'local', 'cagahora', 'fase', 'qtd', 'dursem', 'semsem', 'obs', 'qtdtur', 'carghr', 'cgmin', 'fech', 'fec'];
  dataSource = new MatTableDataSource<Base>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.apiService.getBase().subscribe(response => {
      this.dataSource.data = response;
    });
  }

}

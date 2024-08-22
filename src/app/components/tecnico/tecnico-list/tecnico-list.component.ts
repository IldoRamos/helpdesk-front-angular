import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})
export class TecnicoListComponent  implements OnInit{
  ELEMENT_DATA: Tecnico[]= [
    {
    id:1,
    nome: 'Ildo Ramos',
    cpf: '123.456.789-28',
    email: 'ramos@gmail.com',
    senha: '1234',
    perfis: ['0'],
    dataCriacao: '13/08/2024'
  }
]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor(){}
  ngOnInit(): void {
      
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


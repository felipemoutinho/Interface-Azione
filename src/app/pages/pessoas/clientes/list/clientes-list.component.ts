import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientesService } from 'src/app/core/shared/services/clientes.service';
import { ClientesModel } from 'src/app/core/shared/models/clientes.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit, OnDestroy, AfterViewInit {

  public clientes!: Array<ClientesModel>;
  private clientesSub!: Subscription;

  displayedColumns: string[] = ['codigopessoa', 'nome', 'observacao'];
  dataSource!: MatTableDataSource<ClientesModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private clientesService: ClientesService, private router: Router) { 
    
  }
  

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.getAllClientes();
  }
  
  ngOnDestroy(): void {
    if(this.clientesSub){
      this.clientesSub.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickedRows(idpessoa:number){
    console.log(idpessoa);
    this.router.navigate(['/clientes/editar/',idpessoa]);
  }

  getAllClientes(): void {
    this.clientesSub = this.clientesService.getAllClientes().subscribe(listaClientes => {
      this.clientes = listaClientes
      this.dataSource = new MatTableDataSource(this.clientes)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    });
  }
}

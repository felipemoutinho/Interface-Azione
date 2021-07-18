import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientesService } from "src/app/core/shared/services/clientes.service";

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes.form.component.html',
    styleUrls: ['./clientes.form.component.scss']
})
export class ClientesFormComponent implements AfterViewInit, OnInit{
    
    title!: string;

    constructor(private clientesService: ClientesService, 
        private activatedRoute: ActivatedRoute, 
        private router: Router,
        private changeDetection: ChangeDetectorRef
        ){

    }

    ngOnInit() {
        this.title = 'Cadastro cliente';
        this.changeDetection.detectChanges();
    }

    async ngAfterViewInit() {
        const idpessoa = this.activatedRoute.snapshot.paramMap.get('idpessoa');

        if(idpessoa){
            this.title = 'Editar cliente';
            this.changeDetection.detectChanges();
            
            const dadosCliente = await this.clientesService.getByIdpessoa(+idpessoa);

            if(dadosCliente){
                console.log(dadosCliente);
            }
        }
    }
}
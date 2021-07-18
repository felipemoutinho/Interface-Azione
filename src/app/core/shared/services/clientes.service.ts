import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/api-response.model";
import { ClientesModel, DadosCliente } from "../models/clientes.model";

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor(private http: HttpClient){

    }

    getAllClientes(){
        return this.http.get<ClientesModel[]>(`${env.api}/clientes`);
    }

    async getByIdpessoa(idpessoa: number){
        return this.http.get<DadosCliente>(`${env.api}/clientes/${idpessoa}`).toPromise();
    }
}
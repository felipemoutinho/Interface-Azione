import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CepService {
    constructor(private httpService: HttpClient){

    }

    public getEndereco(cep: string): Observable<any> {
        if(cep != null && cep != ''){
            return this.httpService.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
        }
        else{
            throw new Error('CEP inválido');
        }
    }
}
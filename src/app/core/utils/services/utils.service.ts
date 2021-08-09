import { Injectable } from "@angular/core";
import { Estado } from "../../shared/models/estado.model";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    
    
    /* getAddressByZipCode(cep: string): Observable<Address> {
        return this.httpClient.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
    } */
}

export const ListaEstados: Estado[] = 
[
    {
        idestado: 1,
        nome: 'Acre',
        uf: 'AC',
        idpais: 33
    },
    {
        idestado: 2,
        nome: 'Alagoas',
        uf: 'AL',
        idpais: 33
    },
    {
        idestado: 3,
        nome: 'Amazonas',
        uf: 'AM',
        idpais: 33
    },
    {
        idestado: 4,
        nome: 'Amapá',
        uf: 'AP',
        idpais: 33
    },
    {
        idestado: 5,
        nome: 'Bahia',
        uf: 'BA',
        idpais: 33
    },
    {
        idestado: 6,
        nome: 'Ceará',
        uf: 'CE',
        idpais: 33
    },
    {
        idestado: 7,
        nome: 'Distrito Federal',
        uf: 'DF',
        idpais: 33
    },
    {
        idestado: 8,
        nome: 'Espírito Santo',
        uf: 'ES',
        idpais: 33
    },
    {
        idestado: 9,
        nome: 'Goiás',
        uf: 'GO',
        idpais: 33
    },
    {
        idestado: 10,
        nome: 'Maranhão',
        uf: 'MA',
        idpais: 33
    },
    {
        idestado: 11,
        nome: 'Minas Gerais',
        uf: 'MG',
        idpais: 33
    },
    {
        idestado: 12,
        nome: 'Mato Grosso Do Sul',
        uf: 'MS',
        idpais: 33
    },
    {
        idestado: 13,
        nome: 'Mato Grosso',
        uf: 'MT',
        idpais: 33
    },
    {
        idestado: 14,
        nome: 'Pará',
        uf: 'PA',
        idpais: 33
    },
    {
        idestado: 15,
        nome: 'Paraíba',
        uf: 'PB',
        idpais: 33
    },
    {
        idestado: 16,
        nome: 'Pernambuco',
        uf: 'PE',
        idpais: 33
    },
    {
        idestado: 17,
        nome: 'Piauí',
        uf: 'PI',
        idpais: 33
    },
    {
        idestado: 18,
        nome: 'Paraná',
        uf: 'PR',
        idpais: 33
    },
    {
        idestado: 19,
        nome: 'Rio de Janeiro',
        uf: 'RJ',
        idpais: 33
    },
    {
        idestado: 20,
        nome: 'Rio Grande do Norte',
        uf: 'RN',
        idpais: 33
    },
    {
        idestado: 21,
        nome: 'Rondônia',
        uf: 'RO',
        idpais: 33
    },
    {
        idestado: 22,
        nome: 'Roraima',
        uf: 'RR',
        idpais: 33
    },
    {
        idestado: 23,
        nome: 'Rio Grande do Sul',
        uf: 'RS',
        idpais: 33
    },
    {
        idestado: 24,
        nome: 'Santa Catarina',
        uf: 'SC',
        idpais: 33
    },
    {
        idestado: 25,
        nome: 'Sergipe',
        uf: 'SE',
        idpais: 33
    },
    {
        idestado: 26,
        nome: 'São Paulo',
        uf: 'SP',
        idpais: 33
    },
    {
        idestado: 27,
        nome: 'Tocantins',
        uf: 'TO',
        idpais: 33
    }
]
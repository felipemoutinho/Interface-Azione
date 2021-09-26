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

    async salvarCliente(cliente: any) {
        console.log(this.formataBody(cliente));
        const bodyFormatado = this.formataBody(cliente);
        if(cliente.iddadoscliente){
            return this.http.put(`${env.api}/clientes/${cliente.iddadoscliente}`, bodyFormatado).toPromise();
        }
        else{
            if(cliente.pessoa.pessoaFisica.cpf){
                return this.http.post(`${env.api}/clientes/cliente-pf`, bodyFormatado).toPromise();
            }
            else{
                return this.http.post(`${env.api}/clientes/cliente-pj`, bodyFormatado).toPromise();
            }
        }
    }

    private formataBody(cliente: any): Object{
        return {
            pessoa: {
                nome: cliente.pessoa.nome,
                codigopessoa: cliente.pessoa.codigopessoa,
                pessoaContato: [{
                    idtipocontato: cliente.pessoa.contatos[0].idtipocontato,
                    descricaocontato: cliente.pessoa.contatos[0].descricaocontato,
                    indcontatoprincipal: cliente.pessoa.contatos[0].indcontatoprincipal
                }],
                pessoaEndereco: [{
                    logradouro: cliente.pessoa.enderecos[0].logradouro,
                    bairro: cliente.pessoa.enderecos[0].bairro,
                    numero: cliente.pessoa.enderecos[0].numero,
                    complemento: cliente.pessoa.enderecos[0].complemento,
                    cep: cliente.pessoa.enderecos[0].cep,
                    idcidade: cliente.pessoa.enderecos[0].idcidade,
                    idestado: cliente.pessoa.enderecos[0].idestado,
                    idpais: cliente.pessoa.enderecos[0].idpais,
                    indprincipal: cliente.pessoa.enderecos[0].indprincipal
                }],
                cliente: {
                    observacao: ""
                },
                pessoaFisica: {
                    cpf: cliente.pessoa.pessoaFisica.cpf,
                    identidade: cliente.pessoa.pessoaFisica.identidade,
                    datanascimento: cliente.pessoa.pessoaFisica.datanascimento,
                    sexo: cliente.pessoa.pessoaFisica.sexo,
                    estadocivil: +cliente.pessoa.pessoaFisica.estadocivil,
                    nomepai: cliente.pessoa.pessoaFisica.nomepai,
                    nomemae: cliente.pessoa.pessoaFisica.nomemae,
                    idindicadorInscEstadual: null,
                    inscricaoEstadual: '',
                },
                pessoaJuridica: {
                    cnpj: cliente.pessoa.pessoaJuridica.cnpj,
                    razaoSocial: cliente.pessoa.pessoaJuridica.razaoSocial,
                    nomeFantasia: cliente.pessoa.pessoaJuridica.nomeFantasia,
                    inscricaoMunicipal: cliente.pessoa.pessoaJuridica.inscricaoMunicipal,
                    idcnae: cliente.pessoa.pessoaJuridica.idcnae,
                    suframa: cliente.pessoa.pessoaJuridica.suframa,
                    idindicadorInscEstadual: cliente.pessoa.pessoaJuridica.idindicadorInscEstadual,
                    inscricaoEstadual: cliente.pessoa.pessoaJuridica.inscricaoEstadual,
                    idtributacao: cliente.pessoa.pessoaJuridica.idtributacao,
                    dataFundacao: cliente.pessoa.pessoaJuridica.dataFundacao,
                    bloqueada: cliente.pessoa.pessoaJuridica.bloqueada,
                }
            }
        }
    }
}
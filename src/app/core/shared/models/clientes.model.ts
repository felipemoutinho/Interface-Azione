export interface ClientesModel {
    iddadoscliente: number;
    idpessoa: number;
    observacao: string;
    dataInclusao: Date;
    dataAlteracao: Date;
    pessoa: Pessoa
}

interface Pessoa {
    codigopessoa: string;
    nome: string;
}
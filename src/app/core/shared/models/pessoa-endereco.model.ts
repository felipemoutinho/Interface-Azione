export interface PessoaEndereco {
    idpessoaendereco: number;
    idpessoa: number;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
    cep: string;
    idcidade: number;
    idestado: number;
    idpais: number;
    indprincipal: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
}
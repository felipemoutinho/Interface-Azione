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

export interface DadosCliente {
    dadosCliente: ClientesModel;
    pessoa: DadosPessoa;
}

interface DadosPessoa {
    idpessoa: number;
    codigopessoa: string;
    nome: string;
    ativa: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
    pessoaContato: Array<PessoaContato>;
    pessoaEndereco: Array<PessoaEndereco>;
    pessoaFisica: PessoaFisica;
    pessoaJuridica: PessoaJuridica;
}

interface PessoaContato {
    idpessoacontato: number;
    idpessoa: number;
    idtipocontato: number;
    descricaocontato: string;
    indcontatoprincipal: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
}

interface PessoaEndereco {
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

interface PessoaFisica {
    iddadospessoafisica: number;
    idpessoa: number;
    cpf: string;
    identidade: string;
    datanascimento: Date;
    sexo: string;
    estadocivil: number;
    nomepai: string;
    nomemae: string;
    idindicadorInscEstadual: number;
    inscricaoEstadual: string;
    dataInclusao: Date;
    dataAlteracao: Date;
}

interface PessoaJuridica {
    iddadospessoajuridica: number;
    idpessoa: number;
    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    inscricaoMunicipal: string;
    idcnae: number;
    suframa: string;
    idindicadorInscEstadual: number;
    inscricaoEstadual: string;
    idtributacao: number;
    dataFundacao: Date;
    bloqueada: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
}

export interface TipoPessoa{
    tipo: number;
    descricao: string;
}
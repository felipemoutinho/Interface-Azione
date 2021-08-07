export interface PessoaJuridica {
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
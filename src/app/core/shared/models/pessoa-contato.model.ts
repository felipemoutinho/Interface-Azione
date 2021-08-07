export interface PessoaContato {
    idpessoacontato: number;
    idpessoa: number;
    idtipocontato: number;
    descricaocontato: string;
    indcontatoprincipal: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
}
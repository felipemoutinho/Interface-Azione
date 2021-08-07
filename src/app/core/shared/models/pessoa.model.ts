import { PessoaContato } from "./pessoa-contato.model";
import { PessoaEndereco } from "./pessoa-endereco.model";
import { PessoaFisica } from "./pessoa-fisica.model";
import { PessoaJuridica } from "./pessoa-juridica.model";

export interface Pessoa {
    idpessoa: number;
    codigopessoa: string;
    nome: string;
    ativa: boolean;
    dataInclusao: Date;
    dataAlteracao: Date;
    pessoaContato: PessoaContato[];
    pessoaEndereco: PessoaEndereco[];
    pessoaFisica: PessoaFisica;
    pessoaJuridica: PessoaJuridica;
}

export interface TipoPessoa{
    tipo: number;
    descricao: string;
}
import { PessoaContato } from "./pessoa-contato.model";
import { PessoaEndereco } from "./pessoa-endereco.model";
import { PessoaFisica } from "./pessoa-fisica.model";
import { PessoaJuridica } from "./pessoa-juridica.model";
import { Pessoa } from "./pessoa.model";

export interface ClientesModel {
    iddadoscliente: number;
    idpessoa: number;
    observacao: string;
    dataInclusao: Date;
    dataAlteracao: Date;
}

export interface DadosCliente {
    dadosCliente: ClientesModel;
    pessoa: Pessoa;
}

export interface DadosClientePF extends DadosCliente {
    dadosPessoaFisica: PessoaFisica;
}

export interface DadosClientePJ extends DadosCliente {
    dadosPessoaJuridica: PessoaJuridica;
}
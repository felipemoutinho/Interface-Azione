import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup,FormArray ,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ContatoComponent } from "src/app/core/shared/components/contato/contato.component";
import { TipoPessoa } from "src/app/core/shared/models/pessoa.model";
import { ClientesService } from "src/app/core/shared/services/clientes.service";
import { AlertService } from "src/app/core/utils/alerts/alert.service";
import {  MatRadioChange  } from '@angular/material/radio'
import { DadosCliente } from "src/app/core/shared/models/clientes.model";
import { Estado } from "src/app/core/shared/models/estado.model";
import { ListaEstados } from "src/app/core/utils/services/utils.service";
import { CepService } from "src/app/core/utils/services/cep.service";
import { PessoaTipo } from "src/app/core/enum/utils.enum";
import * as moment from "moment";

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes.form.component.html',
    styleUrls: ['./clientes.form.component.scss']
})
export class ClientesFormComponent implements AfterViewInit, OnInit{
    
    formGroup!: FormGroup;
    formControls!: FormControl;
    listaEstados?: Estado[];
    
    tipoPessoa!: number;
    
    tiposPessoas: TipoPessoa[] = [
        {
            tipo: 1,
            descricao: 'Pessoa Jurídica'
        },
        {
            tipo: 2,
            descricao: 'Pessoa Física'
        }
    ];

    listaSexo = {
        1: 'Masculino',
        2: 'Feminino'
    };

    listaEstadoCivil = {
        1: 'Solteiro(a)',
        2: 'Casado(a)',
        3: 'Divorciado(a)',
        4: 'Viúvo(a)'
    };

    listaTipoInscricaoEstadual = {
        1: 'Não Contribuinte',
        2: 'Contribuinte Isento de IE',
        3: 'Contribuinte ICMS',
    };

    listaTipoTributacao = {
        1: 'Simples Nacional',
        2: 'Simples Nacional com Excesso Receita',
        3: 'Lucro Real',
        4: 'Lucro Presumido',
        5: 'MEI - Micro Empreendedor Individual'
    };

    listaTipoContato = {
        1: 'Telefone Residencial',
        2: 'Telefone Comercial',
        3: 'E-mail',
        4: 'Fax',
        5: 'Telefone Celular',
        6: 'Telefone de Cobrança',
        7: 'Telefone de Referência',
        8: 'Visita Técnica',
        9: 'Acesso Remoto',
        10: 'Site'
    };

    constructor(private clientesService: ClientesService, 
        private activatedRoute: ActivatedRoute, 
        private router: Router,
        private changeDetection: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private cepService: CepService
        ){

    }

    ngOnInit() {
        
        const contatos = this.formBuilder.group({
            idpessoacontato: this.formBuilder.control(''),
            idpessoa: this.formBuilder.control(''),
            idtipocontato: this.formBuilder.control('', [Validators.required]),
            descricaocontato: this.formBuilder.control('', [Validators.required]),
            indcontatoprincipal: this.formBuilder.control('', Validators.required)
        });

        const enderecos = this.formBuilder.group({
            idpessoaendereco: this.formBuilder.control(''),
            idpessoa: this.formBuilder.control(''),
            logradouro: this.formBuilder.control(''),
            bairro: this.formBuilder.control(''),
            numero: this.formBuilder.control(''),
            complemento: this.formBuilder.control(''),
            cep: this.formBuilder.control('', [Validators.required]),
            idcidade: this.formBuilder.control(''),
            idestado: this.formBuilder.control(''),
            idpais: this.formBuilder.control(''),
            indprincipal: this.formBuilder.control('')
        });

        const pessoaFisica = this.formBuilder.group({
            iddadospessoafisica: this.formBuilder.control(''),
            idpessoa: this.formBuilder.control(''),
            cpf: this.formBuilder.control('', [Validators.required]),
            identidade: this.formBuilder.control(''),
            datanascimento: this.formBuilder.control(''),
            sexo: this.formBuilder.control('', [Validators.required]),
            estadocivil: this.formBuilder.control(''),
            nomepai: this.formBuilder.control(''),
            nomemae: this.formBuilder.control('', [Validators.required]),
            idindicadorInscEstadual: this.formBuilder.control(''),
            inscricaoEstadual: this.formBuilder.control(''),
        });

        const pessoaJuridica = this.formBuilder.group({
            iddadospessoajuridica: this.formBuilder.control(''),
            idpessoa: this.formBuilder.control(''),
            cnpj: this.formBuilder.control('', [Validators.required]),
            razaoSocial: this.formBuilder.control(''),
            nomeFantasia: this.formBuilder.control(''),
            inscricaoMunicipal: this.formBuilder.control(''),
            idcnae: this.formBuilder.control(''),
            suframa: this.formBuilder.control(''),
            idindicadorInscEstadual: this.formBuilder.control(''),
            inscricaoEstadual: this.formBuilder.control(''),
            idtributacao: this.formBuilder.control(''),
            dataFundacao: this.formBuilder.control(''),
            bloqueada: this.formBuilder.control(''),
        });
        
        
        
        const pessoa = this.formBuilder.group({
            idpessoa: this.formBuilder.control(''),
            codigopessoa: this.formBuilder.control('', [Validators.required]),
            nome: this.formBuilder.control('', [Validators.required]),
            contatos: this.formBuilder.array([contatos]),
            enderecos: this.formBuilder.array([enderecos]),
            pessoaFisica,
            pessoaJuridica
        });

        this.formGroup = this.formBuilder.group({
            iddadoscliente : this.formBuilder.control(''),
            idpessoa : this.formBuilder.control(''),
            observacao: this.formBuilder.control(''),
            pessoa
        });

        this.tipoPessoa = 1;
        this.listaEstados = ListaEstados;
    }

    get EnderecoForms(){
        return this.formGroup.get('pessoa')?.get('enderecos') as FormArray;
    }

    get ContatoForms(){
        return this.formGroup.get('pessoa')?.get('contatos') as FormArray;
    }

    get FormGroupPessoa(){
        return this.formGroup.get('pessoa') as FormGroup;
    }

    get FormGroupPessoaFisica(){
        return this.formGroup.get('pessoa')?.get('pessoaFisica') as FormGroup;
    }

    get FormGroupPessoaJuridica(){
        return this.formGroup.get('pessoa')?.get('pessoaJuridica') as FormGroup;
    }

    get FormGroupEndereco(){
        return this.EnderecoForms.at(0) as FormGroup;
    }

    get FormGroupContato(){
        return this.ContatoForms.at(0) as FormGroup;
    }

    async ngAfterViewInit() {
        const idpessoa = this.activatedRoute.snapshot.paramMap.get('idpessoa');

        if(idpessoa){
            
            const dadosCliente = await this.clientesService.getByIdpessoa(+idpessoa);

            if(dadosCliente){
                this.formGroup.patchValue(dadosCliente);
                const dadosContato = this.formGroup.get('pessoa')?.get('contatos') as FormArray;
                const dadosEndereco = this.formGroup.get('pessoa')?.get('enderecos') as FormArray;
                dadosContato.patchValue(dadosCliente.pessoa.pessoaContato);
                dadosEndereco.patchValue(dadosCliente.pessoa.pessoaEndereco);
                
                if(dadosCliente.pessoa.pessoaFisica){
                    this.tipoPessoa = PessoaTipo.Fisica;
                    this.removeValidatorsPessoa(PessoaTipo.Juridica);
                }
                    
                else{
                    this.tipoPessoa = PessoaTipo.Juridica;
                    this.removeValidatorsPessoa(PessoaTipo.Fisica)
                }  
            }
        }
    }

    voltar(){
        this.router.navigate(['clientes']);
    }

    async onSubmit(){
        try{
            await this.clientesService.salvarCliente(this.formGroup.value);
            this.alertService.Success('Cliente salvo com sucesso!');
        }
        catch(error){
            console.log(error);
            this.alertService.Error(`Erro ao salvar cliente: ${error}`);
        }
    }

    radioChange(event: MatRadioChange){
        this.tipoPessoa = event.value
        if(this.tipoPessoa === PessoaTipo.Fisica)
            this.removeValidatorsPessoa(PessoaTipo.Juridica);
        else
            this.removeValidatorsPessoa(PessoaTipo.Fisica);
    }

    findEndereco(){
        const cep = this.EnderecoForms.value[0].cep as string;
        
        if(cep.length == 8){
            this.cepService.getEndereco(cep).subscribe((endereco) => {
                if(endereco.erro === true){
                    this.alertService.Warning('Endereço não encontrado.')
                }
                else{
                    const dadosEndereco = this.EnderecoForms.controls;
                    dadosEndereco[0].get('bairro')?.setValue(endereco.bairro);
                    dadosEndereco[0].get('logradouro')?.setValue(endereco.logradouro);
                    dadosEndereco[0].get('idcidade')?.setValue(endereco.localidade);
                    dadosEndereco[0].get('idestado')?.setValue(this.findIdEstado(endereco.uf));
                    console.log(dadosEndereco);
                }
            })
        }
    }

    findIdEstado(uf: string): number{
        if(uf){
            const idestado = this.listaEstados?.find(x => x.uf == uf)?.idestado as number;
            return idestado
        }
        else{
            return 0;
        }
    }

    removeValidatorsPessoa(pessoaTipo: PessoaTipo){
        if(pessoaTipo == PessoaTipo.Juridica){
            const dadosPessoaJuridica = this.formGroup.get('pessoa')?.get('pessoaJuridica') as FormGroup;
            
            if(dadosPessoaJuridica){
                for(const key in dadosPessoaJuridica.controls){
                    dadosPessoaJuridica.get(key)?.clearValidators();
                    dadosPessoaJuridica.get(key)?.updateValueAndValidity();
                }
            }
        }
        else{
            const dadosPessoaFisica = this.formGroup.get('pessoa')?.get('pessoaFisica') as FormGroup;
            
            if(dadosPessoaFisica){
                for(const key in dadosPessoaFisica.controls){
                    dadosPessoaFisica.get(key)?.clearValidators();
                    dadosPessoaFisica.get(key)?.updateValueAndValidity();
                }
            }
        }
    }
}
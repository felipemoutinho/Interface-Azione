import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup,FormArray ,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ContatoComponent } from "src/app/core/shared/components/contato/contato.component";
import { ClientesService } from "src/app/core/shared/services/clientes.service";

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes.form.component.html',
    styleUrls: ['./clientes.form.component.scss']
})
export class ClientesFormComponent implements AfterViewInit, OnInit{
    
    formGroup!: FormGroup;
    formControls!: FormControl;

    constructor(private clientesService: ClientesService, 
        private activatedRoute: ActivatedRoute, 
        private router: Router,
        private changeDetection: ChangeDetectorRef,
        private formBuilder: FormBuilder
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
            cep: this.formBuilder.control(''),
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
            sexo: this.formBuilder.control(''),
            estadocivil: this.formBuilder.control(''),
            nomepai: this.formBuilder.control(''),
            nomemae: this.formBuilder.control(''),
            idindicadorInscEstadual: this.formBuilder.control(''),
            inscricaoEstadual: this.formBuilder.control(''),
        });

        const pessoaJuridica = this.formBuilder.group({
            iddadospessoajuridica: this.formBuilder.control(''),
            idpessoa: this.formBuilder.control(''),
            cnpj: this.formBuilder.control(''),
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
        
        const dadosCliente = this.formBuilder.group({
            iddadoscliente : this.formBuilder.control(''),
            idpessoa : this.formBuilder.control(''),
            observacao: this.formBuilder.control('')
        });
        
        const pessoa = this.formBuilder.group({
            idpessoa: this.formBuilder.control(''),
            codigopessoa: this.formBuilder.control('', [Validators.required]),
            nome: this.formBuilder.control('', [Validators.required]),
            contatos: this.formBuilder.array([contatos]),
            enderecos: this.formBuilder.array([enderecos]),
            pessoaFisica,
            pessoaJuridica,
            dadosCliente
        });

        this.formGroup = this.formBuilder.group({
            pessoa
        });
    }

    get EnderecoForms(){
        return this.formGroup.get('pessoa')?.get('enderecos') as FormArray;
    }

    get ContatoForms(){
        return this.formGroup.get('pessoa')?.get('contatos') as FormArray;
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
            }
        }
    }

    voltar(){
        this.router.navigate(['clientes']);
    }

    onSubmit(){
        console.log(this.formGroup.value);
    }
}
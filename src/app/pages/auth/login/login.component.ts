import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DadosUsuario } from "src/app/core/shared/models/dados-usuario.model";
import { TokenApi } from "src/app/core/shared/models/token.model";
import { LoginService } from "src/app/core/shared/services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router, 
        private loginService: LoginService,
        private formBuilder: FormBuilder
        ){

    }

    loginForm = new FormGroup({
        login: new FormControl(''),
        senha: new FormControl('')
    })

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: ['', [Validators.required]],
            senha: ['', [Validators.required]]
        });
    }
    
    async onSubmit(){
        try{
            if(this.loginForm.valid){
                const {login, senha} = this.loginForm.value;
                const result = await this.loginService.login(login,senha);
                this.router.navigate(['']);
            }
        }
        catch(error){
            console.log(error);
        }
    }
}
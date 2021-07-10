import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DadosUsuario } from "src/app/core/shared/models/dados-usuario.model";
import { TokenApi } from "src/app/core/shared/models/token.model";
import { LoginService } from "src/app/core/shared/services/login.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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
    
    onSubmit(){
        if(this.loginForm.valid){
            const {login, senha} = this.loginForm.value;
            const tokenApi = new TokenApi();
            tokenApi.access_token;
            this.loginService.login(login,senha).subscribe(
                result => {
                    Object.assign(tokenApi,result)
                    window.localStorage.setItem('token', tokenApi.access_token)
                }
            );
            this.router.navigate(['/home']);
        }
    }
}
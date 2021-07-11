import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { TokenApi } from "../models/token.model";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private http: HttpClient){

    }
    
    async login(login: string, senha: string): Promise<TokenApi> {
        const result = await this.http.post<TokenApi>(`${environment.api}/auth/login`,{login,senha}).toPromise<TokenApi>();

        if(result && result.access_token){
          window.localStorage.setItem('token', result.access_token);
        }
        
        return result;
    }
}
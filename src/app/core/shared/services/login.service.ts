import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import jwt_decode from 'jwt-decode';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { TokenApi } from "../models/token.model";

const httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

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

    isTokenExpired(token?: string): boolean {
      if (!token) {
        return true;
      }
  
      const date = this.getTokenExpirationDate(token);
      if (date === undefined) {
        return false;
      }
  
      return !(date.valueOf() > new Date().valueOf());
    }

    getTokenExpirationDate(token: string): Date | undefined {
      const decoded: any = jwt_decode(token)
  
      if (decoded.exp === undefined) {
        return undefined;
      }
  
      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    }

    isUserLoggedIn() {
      const token = this.getAuthorizationToken();
      if (!token) {
        return false;
      } else if (this.isTokenExpired(token)) {
        return false;
      }
  
      return true;
    }

    getAuthorizationToken() {
      const token = window.localStorage.getItem('token');
      return token;
    }
}
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

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
    
    login(login: string, senha: string) {
        return this.http.post(`${environment.api}/auth/login`,{login,senha},httpOptions).pipe();
    }
}
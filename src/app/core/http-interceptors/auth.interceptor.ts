import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../shared/services/auth.service";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService, private router: Router){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getAuthorizationToken();
        let request: HttpRequest<any> = req;
        
        if(token && !this.authService.isTokenExpired(token) && !request.url.includes('viacep')){
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // Erro de client-side ou de rede
          console.error('Ocorreu um erro:', error.error.message);
        } else {
          // Erro retornando pelo backend
          console.error(
            `Código do erro ${error.status}, ` +
            `Erro: ${JSON.stringify(error.error)}`);

            if(error.status === HttpStatusCode.Unauthorized){
                this.router.navigate(['']);
            }
        }
        // retornar um observable com uma mensagem amigavel.
        return throwError('Ocorreu um erro, tente novamente');
      }
}
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private snackBar: MatSnackBar){

    }

    Error(message: string){
        
        const config = new  MatSnackBarConfig();
        config.duration = 5000;
        config.verticalPosition = 'top';
        config.horizontalPosition = 'end';
        config.panelClass = ['error-snackbar'];

        this.snackBar.open(message,'OK', config);
    }

    Success(message: string){
        
        const config = new  MatSnackBarConfig();
        config.duration = 2000;
        config.verticalPosition = 'top';
        config.horizontalPosition = 'end';
        config.panelClass = ['success-snackbar'];

        this.snackBar.open(message,'OK', config);
    }

    Warning(message: string){
        
        const config = new  MatSnackBarConfig();
        config.duration = 2000;
        config.verticalPosition = 'top';
        config.horizontalPosition = 'end';
        config.panelClass = ['warning-snackbar'];

        this.snackBar.open(message,'OK', config);
    }

    Default(message: string){
        
        const config = new  MatSnackBarConfig();
        config.duration = 2000;
        config.verticalPosition = 'top';
        config.horizontalPosition = 'end';
        config.panelClass = ['default-snackbar'];

        this.snackBar.open(message,'OK', config);
    }
}
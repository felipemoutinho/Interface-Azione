import { Component } from "@angular/core";
import { AlertService } from "./alert.service";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
    
    constructor(private alertService: AlertService){

    }
    message: string = "Olá"
    tipoalerta = "alert alert-danger"
}
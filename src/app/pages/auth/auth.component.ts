import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

    constructor(private router: Router){

    }

    onSubmit(){
        this.router.navigate(['/home']);
    }
}
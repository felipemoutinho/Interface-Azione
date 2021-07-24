import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, AfterViewInit{
    
    @Input()
    formGroup!: FormGroup;

    constructor(){

    }
    
    
    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        
    }

}
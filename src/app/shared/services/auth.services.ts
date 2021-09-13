import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(    public router: Router,) { }


    login(){
        this.router.navigate(["home"]);
    }

}
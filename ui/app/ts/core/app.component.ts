"use strict";

import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PRIMARY_COMPONENT, ROUTER_PROVIDERS, RouterOutlet, RouterLink} from "angular2/router";
import {SignInComponent} from "../components/sign/signin.component";
import {SignUpComponent} from "../components/sign/signup.component";
import {CookieService} from '../services/cookies/cookie.service';
import {LoggedoutComponent} from "../components/sign/loggedout.component";
import {HomeComponent} from "../components/homes/home.component";
import {AuthService} from "./auth.service";
import {COMMON_DIRECTIVES} from 'angular2/common';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

//import 'rxjs/Rx'; // this would import all RxJS operators
import 'rxjs/add/operator/map';
@Component({
    selector: "app",
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,RouterOutlet, RouterLink, CookieService],
    template: "<main class='wrapper'><router-outlet></router-outlet></main>"
})

@RouteConfig([
    {path: '/loggedout', name: 'LoggedoutPage', component: LoggedoutComponent},
    {path: "/signin", name: "SignIn", component: SignInComponent},
    {path: "/signup", name: "SignUp", component: SignUpComponent},
    {path: "/home", name: "Home", component: HomeComponent},
    {path: "/**", redirectTo: ["SignIn"]}

])
export class App {mobileView:number = 992;
    toggle:boolean = false;

    constructor() {
        this.attachEvents();
    }

    attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }

}
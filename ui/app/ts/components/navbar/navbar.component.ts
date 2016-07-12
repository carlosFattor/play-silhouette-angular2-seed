import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";

@Component({
    selector: "navbar",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "/private/views/navbar.html"
})
export class NavbarComponent { }

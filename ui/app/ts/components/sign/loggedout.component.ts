import {Component, OnDestroy} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {CookieService} from "../../services/cookies/cookie.service";
import {WindowService} from "../../services/windows/window.service";
import {AuthService} from "../../core/auth.service";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
    selector: "loggedout",
    directives: [NavbarComponent],
    template: `
            <div class="pos-f-t">
                <navbar></navbar>
            </div>
            <div><h2>You have been logged out.</h2></div>`
})
export class LoggedoutComponent implements OnDestroy {
    private sub:any = null;
    
    constructor(private _authService:AuthService, private _router:Router, private _location:Location) {
        if (_authService.isAuthenticated()) {
            this._location.replaceState('/');
            this._router.navigate(['SignIn']);
        }

        this.sub = this._authService.subscribe((val) => {
            if (val.authenticated) {
                this._location.replaceState('/');
                this._router.navigate(['SignIn']);
            }
        });
    }
    ngOnDestroy() {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }
}

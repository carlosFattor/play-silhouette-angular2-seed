import {Directive, OnDestroy} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {AuthService} from "../core/auth.service";

@Directive({
    selector: "[protected]"
})
export class ProtectedDirective implements OnDestroy {
    private sub: any = null;
    
    constructor(private _authService: AuthService, private router:Router, private location: Location){
        if(!_authService.isAuthenticated()){
            this.location.replaceState('/');
            this.router.navigate(['SignIn']);
        }
        
        this.sub = this._authService.subscribe((val) => {
            if (!val.authenticated) {
                this.location.replaceState('/');
                this.router.navigate(['LoggedoutPage']);
            }
        })
    }
    
    ngOnDestroy() {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }
}
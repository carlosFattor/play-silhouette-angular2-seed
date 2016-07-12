System.register(["angular2/core", "angular2/router", "../../core/auth.service", "../navbar/navbar.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1, navbar_component_1;
    var LoggedoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            LoggedoutComponent = (function () {
                function LoggedoutComponent(_authService, _router, _location) {
                    var _this = this;
                    this._authService = _authService;
                    this._router = _router;
                    this._location = _location;
                    this.sub = null;
                    if (_authService.isAuthenticated()) {
                        this._location.replaceState('/');
                        this._router.navigate(['SignIn']);
                    }
                    this.sub = this._authService.subscribe(function (val) {
                        if (val.authenticated) {
                            _this._location.replaceState('/');
                            _this._router.navigate(['SignIn']);
                        }
                    });
                }
                LoggedoutComponent.prototype.ngOnDestroy = function () {
                    if (this.sub != null) {
                        this.sub.unsubscribe();
                    }
                };
                LoggedoutComponent = __decorate([
                    core_1.Component({
                        selector: "loggedout",
                        directives: [navbar_component_1.NavbarComponent],
                        template: "\n            <div class=\"pos-f-t\">\n                <navbar></navbar>\n            </div>\n            <div><h2>You have been logged out.</h2></div>"
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, router_1.Location])
                ], LoggedoutComponent);
                return LoggedoutComponent;
            }());
            exports_1("LoggedoutComponent", LoggedoutComponent);
        }
    }
});

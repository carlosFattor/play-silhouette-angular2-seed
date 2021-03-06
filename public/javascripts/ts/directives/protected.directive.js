System.register(["angular2/core", "angular2/router", "../core/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var ProtectedDirective;
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
            }],
        execute: function() {
            ProtectedDirective = (function () {
                function ProtectedDirective(_authService, router, location) {
                    var _this = this;
                    this._authService = _authService;
                    this.router = router;
                    this.location = location;
                    this.sub = null;
                    if (!_authService.isAuthenticated()) {
                        this.location.replaceState('/');
                        this.router.navigate(['SignIn']);
                    }
                    this.sub = this._authService.subscribe(function (val) {
                        if (!val.authenticated) {
                            _this.location.replaceState('/');
                            _this.router.navigate(['LoggedoutPage']);
                        }
                    });
                }
                ProtectedDirective.prototype.ngOnDestroy = function () {
                    if (this.sub != null) {
                        this.sub.unsubscribe();
                    }
                };
                ProtectedDirective = __decorate([
                    core_1.Directive({
                        selector: "[protected]"
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, router_1.Location])
                ], ProtectedDirective);
                return ProtectedDirective;
            }());
            exports_1("ProtectedDirective", ProtectedDirective);
        }
    }
});

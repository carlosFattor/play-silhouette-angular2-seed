System.register(['angular2/core', "angular2/router", "angular2/common", "../../services/messages/message.service", "../../services/validators/form.validator", "../../core/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, message_service_1, form_validator_1, auth_service_1;
    var SignInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (form_validator_1_1) {
                form_validator_1 = form_validator_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(_fb, _location, _router, _authService) {
                    this._fb = _fb;
                    this._location = _location;
                    this._router = _router;
                    this._authService = _authService;
                }
                SignInComponent.prototype.ngOnInit = function () {
                    this.form = this._fb.group({
                        "email": ["teste", common_1.Validators.compose([common_1.Validators.required, form_validator_1.FormValidator.emailValidator])],
                        "password": ["", common_1.Validators.compose([common_1.Validators.required, form_validator_1.FormValidator.passwordValidator])],
                        "rememberMe": []
                    });
                };
                SignInComponent.prototype.doLogin = function () {
                    if (this.form.dirty && this.form.valid) {
                        console.log("call service authentication");
                        this._authService.doLogin(this.form._value);
                    }
                    else {
                        console.log("Form error");
                        console.log(this.form);
                    }
                };
                SignInComponent = __decorate([
                    core_1.Component({
                        selector: "sign-in",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, message_service_1.MessageService],
                        providers: [],
                        pipes: [],
                        templateUrl: "/public/views/signin.html"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Location, router_1.Router, auth_service_1.AuthService])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_1("SignInComponent", SignInComponent);
        }
    }
});

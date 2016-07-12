System.register(['angular2/core', "angular2/common", "../../services/validators/form.validator", "../../core/auth.service"], function(exports_1, context_1) {
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
    var core_1, common_1, form_validator_1, auth_service_1;
    var SignUpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (form_validator_1_1) {
                form_validator_1 = form_validator_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(_fb, _authService) {
                    this._fb = _fb;
                    this._authService = _authService;
                }
                SignUpComponent.prototype.ngOnInit = function () {
                    this.form = this._fb.group({
                        "firstName": ["", common_1.Validators.compose([common_1.Validators.required])],
                        "lastName": ["", common_1.Validators.compose([common_1.Validators.required])],
                        "email": ["", common_1.Validators.compose([common_1.Validators.required, form_validator_1.FormValidator.emailValidator])],
                        "password": ["", common_1.Validators.compose([common_1.Validators.required, form_validator_1.FormValidator.passwordValidator])]
                    });
                };
                SignUpComponent.prototype.doSignUp = function () {
                    if (this.form.dirty && this.form.valid) {
                        console.log("call service authentication");
                        this._authService.doLogin(this.form._value);
                    }
                    else {
                        console.log("Form error");
                        console.log(this.form);
                    }
                };
                SignUpComponent = __decorate([
                    core_1.Component({
                        templateUrl: "/public/views/signup.html",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});

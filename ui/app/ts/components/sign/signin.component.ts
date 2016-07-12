import { Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router, Location} from "angular2/router";
import {FORM_PROVIDERS, FormBuilder, Validators} from "angular2/common";
import {MessageService} from "../../services/messages/message.service";
import {FormValidator} from "../../services/validators/form.validator";
import {AuthService} from "../../core/auth.service";

@Component({
    selector: "sign-in",
    directives: [ROUTER_DIRECTIVES, RouterLink,MessageService],
    providers: [],
    pipes: [],
    templateUrl: "/public/views/signin.html"
})
export class SignInComponent implements OnInit{
    form: any;

    constructor(private _fb: FormBuilder, private _location:Location, private _router:Router, private _authService:AuthService) {

    }

    ngOnInit() {
        this.form = this._fb.group({
            "email": ["teste", Validators.compose([Validators.required, FormValidator.emailValidator])],
            "password": ["", Validators.compose([Validators.required, FormValidator.passwordValidator])],
            "rememberMe": []
        });
    }

    doLogin() {
        if (this.form.dirty && this.form.valid) {
            console.log("call service authentication");
            this._authService.doLogin(this.form._value)
        } else {
            console.log("Form error");
            console.log(this.form);
        }
    }
}

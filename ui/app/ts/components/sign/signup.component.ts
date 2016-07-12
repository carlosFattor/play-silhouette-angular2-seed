import { Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {FORM_PROVIDERS, FormBuilder, Validators} from "angular2/common";
import {MessageService} from "../../services/messages/message.service";
import {FormValidator} from "../../services/validators/form.validator";
import {AuthService} from "../../core/auth.service";

@Component({
    templateUrl: "/public/views/signup.html",
})
export class SignUpComponent implements OnInit{
    form: any;

    constructor(private _fb: FormBuilder, private _authService:AuthService){}

    ngOnInit() {
        this.form = this._fb.group({
            "firstName": ["", Validators.compose([Validators.required])],
            "lastName":  ["", Validators.compose([Validators.required])],
            "email":     ["", Validators.compose([Validators.required, FormValidator.emailValidator])],
            "password":  ["", Validators.compose([Validators.required, FormValidator.passwordValidator])]
        });
    }

    doSignUp() {
        if (this.form.dirty && this.form.valid) {
            console.log("call service authentication");
            this._authService.doLogin(this.form._value)
        } else {
            console.log("Form error");
            console.log(this.form);
        }
    }
}

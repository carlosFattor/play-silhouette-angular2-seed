import {Component, Host} from "angular2/core";
import {NgFormModel} from "angular2/common";
import {FormValidator} from "../validators/form.validator";

@Component({
    selector: "control-messages",
    inputs: ["controlName: control"],
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class MessageService {
    controlName: string;
    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        let c = this._formDir.form.find(this.controlName);

        for (let property in c.errors) {
            if (c.errors.hasOwnProperty(property) && c.touched) {
                return FormValidator.getValidatorErrorMessage(property);
            }
        }
        return null;
    }
}

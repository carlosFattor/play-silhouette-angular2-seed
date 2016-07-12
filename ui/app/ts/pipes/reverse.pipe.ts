import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "ReversePipe"
})
export class ReversePipe {
    transform(str: string, [param1]) {
        return str.split("").reverse().join("");
    }
}
